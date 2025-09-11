import { NextResponse } from 'next/server';
import { Counter, register } from 'prom-client';


const featureUsageCounter = new Counter({
  name: 'feature_usage_total',
  help: 'Total number of times feature flags are evaluated',
});


const featureAdoptionCounter = new Counter({
  name: 'feature_adoption_total',
  help: 'Total number of users using enabled features',
});


const featureErrorCounter = new Counter({
  name: 'feature_errors_total',
  help: 'Total number of errors caused by feature flags',
});


export async function GET() {
  return new NextResponse(await register.metrics(), {
    headers: { 'Content-Type': register.contentType },
  });
}


export async function POST(req) {
  try {
    const { action } = await req.json();


    if (action === 'usage') featureUsageCounter.inc();
    if (action === 'adoption') featureAdoptionCounter.inc();
    if (action === 'error') featureErrorCounter.inc();


    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
