from flask import Flask

#OpenTelemetry imports
from opentelemetry import trace
from opentelemetry.sdk.resources import Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import (BatchSpanProcessor, ConsoleSpanExporter)
from opentelemetry.instrumentation.flask import FlaskInstrumentor

# OpenTelemetry Setup

resource = Resource.create( {
    "service.name": "riverbed_otel",
    "service.version" : "1.0.0",
})

provider = TracerProvider(resource=resource)

# otlp_exporter = OTLPSpanExporter(
#     endpoint ="localhost:4317",
#     insecure=True,
# )

console_exporter = ConsoleSpanExporter()

# processor = BatchSpanProcessor(otlp_exporter)
processor = BatchSpanProcessor(console_exporter)
provider.add_span_processor(processor)

trace.set_tracer_provider(provider)
tracer = trace.get_tracer(__name__)

app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)

@app.route("/")
def hello():
    with tracer.start_as_current_span("hello"):
        
        return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)




