import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { registerInstrumentations} from '@opentelemetry/instrumentation'

export const tracerProvider = new NodeTracerProvider({
  spanProcessors: [
    new SimpleSpanProcessor(
      new ZipkinExporter({
        serviceName: 'opentelemetry-start',
        url: 'http://localhost:9411/api/v2/spans'
      })
    ),
  ],
});

tracerProvider.register();

registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
  ],
});