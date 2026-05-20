# MPLS (Multiprotocol Label Switching)

- MPLS is a technique for setting up long-range network connections.

- MPLS forwards packets along pre-established label-switched paths (LSPs). Because forwarding decisions are based on labels instead of full IP routing lookups at every hop, packets can follow a consistent, predetermined path through the network.

- MPLS is considered to operate at <mark>OSI layer 2.5</mark>, below the network layer (layer 3) and above the data link layer (layer 2).

- In MPLS each packet is assigned to a class called a <mark>forwarding equivalence class</mark> (FEC). 

- The network paths that packets can take are called <mark>label-switched paths</mark> (LSP) 

- The packets with the same FEC follow the same LSP.

- Each packet carries one or more MPLS labels in an MPLS header. Routers forward packets based on these labels instead of checking the IP header, directing them along the correct Label Switched Path (LSP).

- MPLS does not encrypt traffic.


## Drawbacks

- **High cost** – More expensive than regular Internet connections.

- **Slow setup** – Configuring LSPs takes time and limits quick scaling.

- **Complex management** – Requires coordination with multiple ISPs across regions.

- **No built-in encryption** – Data is sent in plaintext unless extra security is added.

- **Cloud limitations** – Difficult to create direct connections to cloud services.

## Usage

- It is used to set up <mark>Wide Area Networks</mark> (WANs) for **branch networking**, connecting various locations to a central HQ or data center. 

- Branch networks build with MPLS allow spread-out branch offices, restaurants, or campuses to exchange information and access the applications.


- [https://www.cloudflare.com/learning/network-layer/what-is-mpls/](https://www.cloudflare.com/learning/network-layer/what-is-mpls/)
