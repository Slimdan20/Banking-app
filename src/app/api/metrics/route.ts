import { NextResponse, NextRequest } from "next/server";
import { Counter, register } from "prom-client";

const featureUsageCounter = new Counter({
  name: "feature_usage_total",
  help: "Total number of times feature flags are evaluated",
});

const featureAdoptionCounter = new Counter({
  name: "feature_adoption_total",
  help: "Total number of users using enabled features",
});

const featureErrorCounter = new Counter({
  name: "feature_errors_total",
  help: "Total number of errors caused by feature flags",
});

type MetricsAction = "usage" | "adoption" | "error";

interface MetricsActionBody {
  action: MetricsAction;
}

export async function GET() {
  return new NextResponse(await register.metrics(), {
    headers: { "Content-Type": register.contentType },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { action }: MetricsActionBody = await req.json();

    switch (action) {
      case "usage":
        (featureUsageCounter as any).inc();
        break;
      case "adoption":
        (featureAdoptionCounter as any).inc();
        break;
      case "error":
        (featureErrorCounter as any).inc();
        break;
      default:
        return NextResponse.json(
          { success: false, error: "Invalid action" },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
