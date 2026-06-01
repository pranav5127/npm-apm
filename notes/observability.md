# Observability

- It is the ability to understand a system's internal state by analyzing the telemetry it produces such as **MELT data**.
- Observability is often shortened to o11y, where 11 represents the letters between the first “o” and last “y.”
- Observability originates in control theory, where scientists inferred internal system behavior using external signals.
    - 1990s: Siloed Monitoring
    - 2000s: APM
    - 2010s: Cloud-Native Complexity
    - Now : Ai-Assisted Observability

 
## Practices and tools
- Monitor sytem performance end-to-end.
- Debug applications and infrastructure efficiently.
- Detect anomalies before they cause downtime.
- Align reliability with CI/CD pipeline processes.

## MELT

- **Logs**: These are timestamped records of individual events inside an application.
    - Types: 
        - Plain Text (unstructured)
        - JSON (structured)
        - Binary (used for replication and journaling):w

- **Metrics**: Metrics are numerical values describing service or component behavior over time. They provide a broad overview of system health and performance of infrastructure.

- **Traces**: Traces follow a request's full journey through a distributed system, recording every service interaction from start to finish. It helps in identifying service causing issues.

- **Continuous Profiling**: It provides real-time visibility into CPU usage, memory allocation, and code-level performance. 

## Unified Observability

- Unifed Observability consolidates all four signals into a single platform.
- It imporves MTTD and MTTR.

## Observability Vs Monitoring


| Aspect | Monitoring | Observability |
|----------|------------|---------------|
| Primary question | What is broken | Why it is broken |
| Requires predefined alerts | Yes | No |
| Handles unknown failures | No | Yes |
| Suited for distributed systems | Partially | Yes |
| Root cause analysis | Limited | Deep and correlated |
| Core signals | Metrics, uptime | Logs, metrics, traces, profiles |
| Approach | Detect and react | Predict and prevent |
 

## Benefits

- Faster incident detection and resolution.
- Improved system reliability and uptime.
- Higher developer productivity.
- Lower cloud and Monitoring costs.
- Stronger security visibility.
 








