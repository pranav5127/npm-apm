// Data structure containing all term information
const termsData = {
    terms: {
        title: 'All Networking Terms',
        content: `
            <table class="terms-table">
                <thead>
                    <tr>
                        <th>Acronym</th>
                        <th>Full Form</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>MPLS</strong></td>
                        <td>Multiprotocol Label Switching</td>
                        <td>Technique for setting up long-range network connections using label-switched paths</td>
                    </tr>
                    <tr>
                        <td><strong>SASE</strong></td>
                        <td>Secure Access Service Edge</td>
                        <td>Cloud-based security architecture</td>
                    </tr>
                    <tr>
                        <td><strong>SDN</strong></td>
                        <td>Software Defined Networking</td>
                        <td>Technologies that use software to manage networks</td>
                    </tr>
                    <tr>
                        <td><strong>SD-WAN</strong></td>
                        <td>Software Defined Wide Area Network</td>
                        <td>Flexible WAN architecture decoupling networking hardware from control plane</td>
                    </tr>
                    <tr>
                        <td><strong>UCaaS</strong></td>
                        <td>Unified Communication as a Service</td>
                        <td>Cloud-based communication services</td>
                    </tr>
                    <tr>
                        <td><strong>MTTK</strong></td>
                        <td>Mean Time to Knowledge</td>
                        <td>Average time to acquire knowledge about an issue</td>
                    </tr>
                    <tr>
                        <td><strong>MTTR</strong></td>
                        <td>Mean Time to Resolution</td>
                        <td>Average time to resolve an issue</td>
                    </tr>
                    <tr>
                        <td><strong>MTTD</strong></td>
                        <td>Mean Time to Detect</td>
                        <td>Average time to detect an issue</td>
                    </tr>
                    <tr>
                        <td><strong>MTFB</strong></td>
                        <td>Mean Time Between Failures</td>
                        <td>Average time between system failures</td>
                    </tr>
                    <tr>
                        <td><strong>WMI</strong></td>
                        <td>Windows Management Instrumentation</td>
                        <td>Windows system management infrastructure</td>
                    </tr>
                    <tr>
                        <td><strong>SNMP</strong></td>
                        <td>Simple Network Management Protocol</td>
                        <td>Protocol for managing network devices</td>
                    </tr>
                    <tr>
                        <td><strong>API</strong></td>
                        <td>Application Programming Interface</td>
                        <td>Interface for software components to communicate</td>
                    </tr>
                    <tr>
                        <td><strong>CLI</strong></td>
                        <td>Command Line Interface</td>
                        <td>Text-based interface for user interaction</td>
                    </tr>
                    <tr>
                        <td><strong>QoS</strong></td>
                        <td>Quality of Service</td>
                        <td>Performance metrics for network services</td>
                    </tr>
                    <tr>
                        <td><strong>SLA</strong></td>
                        <td>Service Level Agreement</td>
                        <td>Contractual commitment for service quality</td>
                    </tr>
                    <tr>
                        <td><strong>ZTNA</strong></td>
                        <td>Zero Trust Network Access</td>
                        <td>Security model requiring verification for all access</td>
                    </tr>
                    <tr>
                        <td><strong>VPN</strong></td>
                        <td>Virtual Private Network</td>
                        <td>Encrypted network connection for secure data transmission</td>
                    </tr>
                    <tr>
                        <td><strong>NaaS</strong></td>
                        <td>Network as a Service</td>
                        <td>Cloud-based network services</td>
                    </tr>
                    <tr>
                        <td><strong>SaaS</strong></td>
                        <td>Software as a Service</td>
                        <td>Cloud-based software applications</td>
                    </tr>
                    <tr>
                        <td><strong>IaaS</strong></td>
                        <td>Infrastructure as a Service</td>
                        <td>Cloud-based infrastructure resources</td>
                    </tr>
                    <tr>
                        <td><strong>RUM</strong></td>
                        <td>Real User Monitoring</td>
                        <td>Monitoring actual user experience and interactions</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    apm: {
        title: 'Application Performance Monitoring (APM)',
        content: `
            <div class="term-view">
                <h2>Application Performance Monitoring (APM)</h2>
                
                <h3>Overview</h3>
                <p>APM is the practice of tracking key software application performance metrics using monitoring software and telemetry data. It provides insights into how users experience applications and where performance gaps lie.</p>
                <p>APM enables <strong>real-time monitoring</strong> of applications, capturing telemetry data and metrics such as response time, latency, resource usage, and error rates.</p>
                <p>APM tools help in <strong>issue diagnosis and troubleshooting</strong> by providing visibility into application components, dependencies and transactions.</p>

                <h3>Observability vs Monitoring</h3>
                <ul>
                    <li><strong>APM Monitoring:</strong> Monitors application performance and system health by capturing and displaying data which can be analyzed by various teams</li>
                    <li><strong>Observability:</strong> Checks the system's internal state based on the data generated such as logs, metrics and traces</li>
                </ul>

                <h3>Key Uses</h3>
                <ul>
                    <li>Continuous improvement of application performance</li>
                    <li>Cloud resource utilization optimization</li>
                    <li>Application security enhancement</li>
                    <li>Discover problems before they disrupt user experience</li>
                    <li>Determine the root cause of issues quickly</li>
                </ul>

                <h3>Core Features</h3>
                <ul>
                    <li>Infrastructure monitoring</li>
                    <li>Network monitoring</li>
                    <li>Database monitoring</li>
                    <li>Log monitoring</li>
                    <li>Container monitoring</li>
                    <li>Cloud monitoring</li>
                    <li>Serverless monitoring</li>
                    <li>Synthetic monitoring</li>
                    <li>End-user monitoring</li>
                </ul>

                <h3>APM Use Cases</h3>
                
                <div class="box">
                    <h4>Runtime Application Architecture</h4>
                    <p>Provides a comprehensive understanding of an application's structure and how its various components interact with each other. Offers visibility for application stack such as servers, databases, APIs, and third-party services.</p>
                </div>
                
                <div class="box">
                    <h4>Real User Monitoring (RUM)</h4>
                    <p>Focuses on capturing and analyzing user interactions with applications in real-time. Provides insights into user experience by measuring factors like page load times, transaction duration, and overall performance from the end-user's perspective.</p>
                </div>
                
                <div class="box">
                    <h4>Synthetic Monitoring</h4>
                    <p>Involves creating simulated user interactions with an application. These interactions replicate real user behavior and are used proactively to test and monitor the application's performance.</p>
                </div>
                
                <div class="box">
                    <h4>Agentless Monitoring</h4>
                    <p>Gathers performance data without the need for installing agents or modifying application code.</p>
                </div>
                
                <div class="box">
                    <h4>Component Monitoring</h4>
                    <p>Focuses on tracking individual components and services of an application. Involves monitoring the performance, health and availability of each component.</p>
                </div>

                <h3>Importance of APM</h3>
                <p>APM helps organizations proactively identify and address performance bottlenecks, improve user experience, increase efficiency and ultimately drive business success:</p>
                <ul>
                    <li><strong>Proactive Issue Detection:</strong> Identify problems before they impact users</li>
                    <li><strong>Enhanced User Experience:</strong> Monitor and optimize user-facing performance</li>
                    <li><strong>Prevention of Revenue Loss:</strong> Minimize downtime and performance issues</li>
                    <li><strong>Efficient Troubleshooting:</strong> Quickly identify root causes of issues</li>
                    <li><strong>Resource Optimization:</strong> Allocate resources efficiently based on performance data</li>
                    <li><strong>Improved Compliance and Security:</strong> Meet regulatory requirements and security standards</li>
                </ul>

                <h3>Key Metrics of APM</h3>
                <ul>
                    <li><strong>Response Time:</strong> The duration an application takes to respond to a user's action</li>
                    <li><strong>Error Rate:</strong> The occurrence frequency of errors within the application</li>
                    <li><strong>Request Rate:</strong> The volume of requests an application receives per unit of time</li>
                    <li><strong>Application Availability (Uptime):</strong> The total operational time during which the application is accessible</li>
                    <li><strong>CPU Usage:</strong> The amount of processing power consumed by the application</li>
                    <li><strong>Latency:</strong> The delay in data transmission between a source and destination, measuring the time taken for a user's request to reach the server and return a response</li>
                    <li><strong>Application Performance Index (Apdex) Score:</strong> A measurement of the app's performance relative to predefined "normal" performance standards</li>
                    <li><strong>Service Level Agreement (SLA) Score:</strong> A metric defining the expected service quality, calculated using response time, error rate, uptime, and request volume over a specific period</li>
                </ul>
            </div>
        `
    },
    npm: {
        title: 'Network Performance Monitoring (NPM)',
        content: `
            <div class="term-view">
                <h2>Network Performance Monitoring (NPM)</h2>
                
                <h3>Overview</h3>
                <p>Network Performance Monitoring (NPM) is the practice of visualizing, monitoring, optimizing, troubleshooting, and reporting on the health, availability, and performance of your network infrastructure and services.</p>

                <h3>Data Sources</h3>
                <p>NPM ingests telemetry from multiple layers of the network and IT infrastructure:</p>
                <ul>
                    <li><strong>Device Metrics:</strong> Information from SNMP, WMI, CLI, APIs, logs etc.</li>
                    <li><strong>Network Flow Data:</strong> Traffic records such as NetFlow, JFlow, sFlow, IPFIX</li>
                    <li><strong>Packet Data:</strong> Information from network packets</li>
                    <li><strong>End Point Analysis:</strong> Performance data from end devices</li>
                </ul>

                <h3>Key Monitoring Capabilities</h3>
                <div class="box">
                    <h4>SNMP Monitoring</h4>
                    <p>Uses SNMP to track device health, bandwidth, latency, and resource utilization across network infrastructure.</p>
                </div>
                <div class="box">
                    <h4>Flow Data Analysis</h4>
                    <p>Analyzes network traffic flows to understand communication patterns, bandwidth usage, and application performance.</p>
                </div>
                <div class="box">
                    <h4>Full Packet Capture</h4>
                    <p>Captures and inspects every network packet for deep troubleshooting, security analysis, and forensic investigation.</p>
                </div>
                <div class="box">
                    <h4>Endpoint Packet Analysis</h4>
                    <p>Monitors network performance directly from user devices to provide visibility into remote cloud and encrypted traffic.</p>
                </div>
            </div>
        `
    },
    infrastructure: {
        title: 'Infrastructure Monitoring',
        content: `
            <div class="term-view">
                <h2>Infrastructure Monitoring</h2>
                
                <h3>Overview</h3>
                <p>Infrastructure Monitoring is the process of collecting, analyzing and correlating telemetry data across infrastructure components.</p>
                <p>It helps <strong>detect anomalies early</strong> and <strong>minimize production risk</strong>.</p>
                <p>It focuses primarily on foundational infrastructure layers such as <strong>compute, memory, storage, networking and orchestration</strong>.</p>
                <p>Autoscaling dynamically adjusts infrastructure capacity based on demand, but improper thresholds or unexpected traffic spikes can still degrade performance. Monitoring ensures that scaling policies are effective.</p>

                <h3>Types of Infrastructure Monitoring</h3>
                <ul>
                    <li>Agentless Infrastructure Monitoring</li>
                    <li>Agent-based Monitoring</li>
                </ul>

                <h3>How It Works</h3>
                <p>Infrastructure monitoring captures telemetry across compute resources, networks, containers, and orchestration layers to provide insights. By analyzing these insights in real time, teams can quickly detect abnormal behavior and prevent service disruptions.</p>
                <p>Most monitoring strategies collect data through lightweight agents or agentless integrations. They collect host and service level data.</p>
                <p>Once deployed, monitoring systems continuously:</p>
                <ul>
                    <li>Visualize historical trends alongside live system states</li>
                    <li>Detect anomalies and performance degradation</li>
                    <li>Trigger alerts when thresholds are breached</li>
                    <li>Surface dependency issues across services</li>
                </ul>

                <h3>Key Benefits</h3>
                <ul>
                    <li><strong>Early Issue Detection:</strong> Identify problems before they impact users</li>
                    <li><strong>Higher System Reliability:</strong> Maintain consistent uptime and performance</li>
                    <li><strong>Optimized Resource Utilization:</strong> Efficiently allocate and use infrastructure</li>
                    <li><strong>Safer Deployment and Testing:</strong> Monitor during deployment processes</li>
                    <li><strong>Enhanced Security Visibility:</strong> Detect suspicious infrastructure activity</li>
                    <li><strong>Increased ROI for IT Operations:</strong> Make better resource decisions</li>
                </ul>

                <h3>Best Practices</h3>
                <div class="box">
                    <h4>Automate Workflows</h4>
                    <p>Automate telemetry and incident response to speed up recovery times.</p>
                </div>
                <div class="box">
                    <h4>Ensure Full Coverage</h4>
                    <p>Deploy agents environment-wide to eliminate monitoring blind spots.</p>
                </div>
                <div class="box">
                    <h4>Tune Alerts</h4>
                    <p>Optimize alert thresholds to reduce noise and preserve high-signal detection.</p>
                </div>
                <div class="box">
                    <h4>Build Custom Dashboards</h4>
                    <p>Design role-specific views for quick, at-a-glance system health checks.</p>
                </div>
                <div class="box">
                    <h4>Validate Continuously</h4>
                    <p>Test monitoring tools during deployments to ensure telemetry accuracy.</p>
                </div>
                <div class="box">
                    <h4>Correlate Signals</h4>
                    <p>Link infrastructure metrics with application data for faster root-cause analysis.</p>
                </div>

                <h3>Implementation Strategy</h3>
                <p><strong>Identify Critical Systems:</strong> Focus on services and dependencies that impact availability and user experience.</p>
                <p><strong>Track Key Metrics:</strong> Monitor latency, traffic, errors, and resource utilization.</p>
                <p><strong>Collect Telemetry Consistently:</strong> Standardize metrics, logs, and traces across all environments.</p>
                <p><strong>Set Smart Alerts:</strong> Use dynamic thresholds to reduce noise and highlight real issues.</p>
                <p><strong>Review and Improve Regularly:</strong> Update monitoring as infrastructure grows and changes.</p>
            </div>
        `
    },
    observability: {
        title: 'Observability',
        content: `
            <div class="term-view">
                <h2>Observability</h2>
                
                <h3>Overview</h3>
                <p>Observability is the ability to understand a system's internal state by analyzing the telemetry it produces such as <strong>MELT data</strong>.</p>
                <p>Observability is often shortened to <strong>o11y</strong>, where 11 represents the letters between the first "o" and last "y."</p>
                <p>Observability originates in control theory, where scientists inferred internal system behavior using external signals.</p>

                <h3>Evolution of Monitoring</h3>
                <ul>
                    <li><strong>1990s:</strong> Siloed Monitoring</li>
                    <li><strong>2000s:</strong> Application Performance Monitoring (APM)</li>
                    <li><strong>2010s:</strong> Cloud-Native Complexity</li>
                    <li><strong>Now:</strong> AI-Assisted Observability</li>
                </ul>

                <h3>Key Practices and Tools</h3>
                <ul>
                    <li>Monitor system performance end-to-end</li>
                    <li>Debug applications and infrastructure efficiently</li>
                    <li>Detect anomalies before they cause downtime</li>
                    <li>Align reliability with CI/CD pipeline processes</li>
                </ul>

                <h3>MELT - Four Core Signals</h3>
                <div class="box">
                    <h4>Logs</h4>
                    <p>Timestamped records of individual events inside an application. Can be plain text (unstructured), JSON (structured), or binary (used for replication and journaling).</p>
                </div>
                <div class="box">
                    <h4>Metrics</h4>
                    <p>Numerical values describing service or component behavior over time. They provide a broad overview of system health and performance of infrastructure.</p>
                </div>
                <div class="box">
                    <h4>Traces</h4>
                    <p>Follow a request's full journey through a distributed system, recording every service interaction from start to finish. Helps in identifying the service causing issues.</p>
                </div>
                <div class="box">
                    <h4>Continuous Profiling</h4>
                    <p>Provides real-time visibility into CPU usage, memory allocation, and code-level performance.</p>
                </div>

                <h3>Unified Observability</h3>
                <p>Unified Observability consolidates all four signals (MELT) into a single platform. It improves MTTD (Mean Time to Detect) and MTTR (Mean Time to Resolution).</p>

                <h3>Observability vs Monitoring</h3>
                <table class="terms-table">
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Monitoring</th>
                            <th>Observability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Primary Question</strong></td>
                            <td>What is broken?</td>
                            <td>Why is it broken?</td>
                        </tr>
                        <tr>
                            <td><strong>Predefined Alerts</strong></td>
                            <td>Required</td>
                            <td>Not required</td>
                        </tr>
                        <tr>
                            <td><strong>Unknown Failures</strong></td>
                            <td>Cannot handle</td>
                            <td>Can handle</td>
                        </tr>
                        <tr>
                            <td><strong>Distributed Systems</strong></td>
                            <td>Partially suited</td>
                            <td>Fully suited</td>
                        </tr>
                        <tr>
                            <td><strong>Root Cause Analysis</strong></td>
                            <td>Limited</td>
                            <td>Deep and correlated</td>
                        </tr>
                        <tr>
                            <td><strong>Core Signals</strong></td>
                            <td>Metrics, uptime</td>
                            <td>Logs, metrics, traces, profiles</td>
                        </tr>
                        <tr>
                            <td><strong>Approach</strong></td>
                            <td>Detect and react</td>
                            <td>Predict and prevent</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Key Benefits</h3>
                <ul>
                    <li>Faster incident detection and resolution</li>
                    <li>Improved system reliability and uptime</li>
                    <li>Higher developer productivity</li>
                    <li>Lower cloud and monitoring costs</li>
                    <li>Stronger security visibility</li>
                </ul>
            </div>
        `
    },
    sdn: {
        title: 'SDN (Software Defined Networking)',
        content: `
            <div class="term-view">
                <h2>SDN (Software Defined Networking)</h2>
                
                <h3>Overview</h3>
                <ul>
                    <li>SDN is a category of technologies that use <strong>software to manage a network</strong></li>
                    <li>SDN software is <strong>interoperable</strong> with any router or switch</li>
                    <li>In traditional networks with only physical hardware, each individual router or switch has to be configured separately</li>
                </ul>

                <h3>Key Concept: Control Plane Separation</h3>
                <ul>
                    <li>In SDN the <strong>control plane is separated</strong> from the <strong>data plane</strong> and the actual hardware</li>
                    <li>This separation makes it possible to <strong>configure from a central location</strong></li>
                    <li><span class="mark">Plane</span> is a networking term that refers to an abstract conception of where networking processes take place:
                        <ul style="margin-left: 2rem; margin-top: 0.5rem;">
                            <li><strong>Control Plane:</strong> Directs network traffic</li>
                            <li><strong>Data Plane:</strong> The actual data traversing the network</li>
                        </ul>
                    </li>
                </ul>

                <h3>Primary Uses</h3>
                <ul>
                    <li><strong>Large Data Centers:</strong> SDNs are widely used to manage complex network infrastructure</li>
                    <li><strong>Data Center Management:</strong> Simplifies network management by controlling networks through software</li>
                    <li><strong>Hybrid Cloud Integration:</strong> Helps connect on-premise infrastructure with cloud infrastructure</li>
                    <li><strong>Cloud Integration Benefits:</strong> Software-based integration is easier and avoids hardware compatibility issues</li>
                </ul>

                <h3>Vendor Support</h3>
                <ul>
                    <li>Many vendors provide both cloud services and SDN solutions for simpler hybrid cloud integration</li>
                </ul>

                <div class="box">
                    <h4>Learn More</h4>
                    <p><a href="https://www.cloudflare.com/learning/network-layer/what-is-sdn/" target="_blank">Cloudflare: What is SDN?</a></p>
                </div>
            </div>
        `
    },
    sdwan: {
        title: 'SD-WAN (Software Defined - Wide Area Network)',
        content: `
            <div class="term-view">
                <h2>SD-WAN (Software Defined - Wide Area Network)</h2>
                
                <h3>Core Concept</h3>
                <ul>
                    <li><strong>Decouples networking hardware</strong> from the control plane</li>
                    <li>Uses <strong>software-defined networking</strong> to securely route traffic across multiple connection types</li>
                    <li>Supported connection types include: <strong>MPLS</strong>, <strong>LTE</strong>, and <strong>broadband</strong></li>
                    <li>Provides a more <strong>flexible WAN architecture</strong> that can take advantage of multiple hardware platforms and connectivity options</li>
                </ul>

                <h3>Branch Connectivity Methods</h3>
                <ul>
                    <li><span class="mark">Virtual Private Networks (VPNs)</span></li>
                    <li><span class="mark"><a href="#" onclick="switchTerm('mpls')">MPLS</a></span></li>
                    <li><span class="mark">Public networks</span></li>
                    <li>And more flexible options for different branch requirements</li>
                </ul>

                <h3>SD-WAN Architecture Components</h3>
                <div class="box">
                    <h4>SD-WAN Controller</h4>
                    <p>Central system that decides traffic policies and routes throughout the network</p>
                </div>
                <div class="box">
                    <h4>SD-WAN Edge</h4>
                    <p>Connects local networks to the SD-WAN and applies controller policies at the edge</p>
                </div>
                <div class="box">
                    <h4>SD-WAN Orchestrator</h4>
                    <p>Manages and coordinates the entire SD-WAN deployment from one unified dashboard</p>
                </div>

                <h3>Key Advantages</h3>
                <ul>
                    <li><strong>Flexibility:</strong> Adapt to multiple connection types and hardware platforms</li>
                    <li><strong>Cost Savings:</strong> More economical than traditional WAN solutions</li>
                    <li><strong>Scalability:</strong> Easily expand network capacity and branch connections</li>
                </ul>

                <div class="box">
                    <h4>Learn More</h4>
                    <p><a href="https://www.cloudflare.com/learning/network-layer/what-is-an-sd-wan/" target="_blank">Cloudflare: What is SD-WAN?</a></p>
                </div>
            </div>
        `
    },
    mpls: {
        title: 'MPLS (Multiprotocol Label Switching)',
        content: `
            <div class="term-view">
                <h2>MPLS (Multiprotocol Label Switching)</h2>
                
                <h3>Overview</h3>
                <ul>
                    <li>MPLS is a <strong>technique for setting up long-range network connections</strong></li>
                    <li>MPLS forwards packets along <strong>pre-established label-switched paths (LSPs)</strong></li>
                    <li>Forwarding decisions are based on <strong>labels instead of full IP routing lookups</strong> at every hop</li>
                    <li>This approach allows packets to follow a <strong>consistent path</strong> across the network</li>
                </ul>

                <h3>OSI Layer Classification</h3>
                <ul>
                    <li>MPLS is considered to operate at <span class="mark">OSI layer 2.5</span></li>
                    <li>Positioned <strong>below the network layer (layer 3)</strong></li>
                    <li>Positioned <strong>above the data link layer (layer 2)</strong></li>
                </ul>

                <h3>Key Concepts</h3>
                <div class="box">
                    <h4>Forwarding Equivalence Class (FEC)</h4>
                    <p>In MPLS, each packet is assigned to a class called a <strong>forwarding equivalence class</strong> (FEC)</p>
                </div>
                <div class="box">
                    <h4>Label-Switched Paths (LSP)</h4>
                    <p>The network paths that packets can take are called <strong>label-switched paths (LSP)</strong></p>
                </div>
                <div class="box">
                    <h4>Path Selection</h4>
                    <p>All packets with the same FEC follow the same LSP through the network</p>
                </div>

                <h3>How MPLS Works</h3>
                <ul>
                    <li>Each packet carries <strong>one or more MPLS labels</strong> in an MPLS header</li>
                    <li>Routers forward packets based on these <strong>labels instead of checking the IP header</strong></li>
                    <li>This mechanism directs packets along the correct Label Switched Path</li>
                    <li><strong>Important:</strong> MPLS does <strong>not encrypt traffic</strong> by default</li>
                </ul>

                <h3>Drawbacks</h3>
                <div class="box">
                    <h4>High Cost</h4>
                    <p>More expensive than regular Internet connections</p>
                </div>
                <div class="box">
                    <h4>Slow Setup</h4>
                    <p>Configuring LSPs takes time and limits quick scaling</p>
                </div>
                <div class="box">
                    <h4>Complex Management</h4>
                    <p>Requires coordination with multiple ISPs across regions</p>
                </div>
                <div class="box">
                    <h4>No Built-in Encryption</h4>
                    <p>Data is sent in plaintext unless extra security is added</p>
                </div>
                <div class="box">
                    <h4>Cloud Limitations</h4>
                    <p>Difficult to create direct connections to cloud services</p>
                </div>

                <h3>Primary Usage</h3>
                <ul>
                    <li><strong>Wide Area Networks (WANs) for Branch Networking:</strong> Used to connect various branch locations to a central HQ or data center</li>
                    <li><strong>Distributed Infrastructure:</strong> Allows spread-out branch offices, restaurants, or campuses to exchange information</li>
                    <li><strong>Application Access:</strong> Enables branch networks to access centralized applications reliably</li>
                </ul>

                <div class="box">
                    <h4>Learn More</h4>
                    <p><a href="https://www.cloudflare.com/learning/network-layer/what-is-mpls/" target="_blank">Cloudflare: What is MPLS?</a></p>
                </div>
            </div>
        `
    }
};

// DOM Elements
const contentDiv = document.getElementById('content');
const termButtons = document.querySelectorAll('.term-btn');

// Event Listeners
termButtons.forEach(button => {
    button.addEventListener('click', () => {
        const termKey = button.getAttribute('data-term');
        switchTerm(termKey, button);
    });
});

// Function to switch between terms
function switchTerm(termKey, button = null) {
    const termData = termsData[termKey];
    
    if (!termData) return;

    // Update active button
    termButtons.forEach(btn => btn.classList.remove('active'));
    
    const targetButton = button || document.querySelector(`[data-term="${termKey}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }

    // Update content with animation
    contentDiv.style.opacity = '0';
    
    setTimeout(() => {
        contentDiv.innerHTML = `
            ${termData.content}
        `;
        contentDiv.style.opacity = '1';
    }, 150);
    
    // Scroll to top
    contentDiv.scrollTop = 0;
}

// Load default term on page load
document.addEventListener('DOMContentLoaded', () => {
    switchTerm('terms');
});

// Smooth transitions
contentDiv.style.transition = 'opacity 0.3s ease';
