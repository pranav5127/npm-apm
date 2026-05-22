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
            </div>
        `
    },
    npm: {
        title: 'Network Performance Monitoring (NPM)',
        content: `
            <div class="term-view">
                <h2>Network Performance Monitoring (NPM)</h2>
                
                <h3>Overview</h3>
                <p>Network Performance Monitoring (NPM) is the practice of visualizing, monitoring, optimizing, troubleshooting, and reporting on the health, availability, and performance of your network, as experienced by users and devices.</p>

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
