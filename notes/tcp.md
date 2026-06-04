# TCP and UDP

## What is a Protocol?

- A protocol is a set of rules that governs communication between devices in a network.
- Protocols define how data is transmitted, received, interpreted, and processed.
- They provide standards for addressing, routing, error detection, and data formatting.

## Network Stack Layers

### Physical Layer
- Handles the physical transmission of signals.
- Includes cables, wireless signals, and hardware connections.

### Data Link Layer
- Provides communication between directly connected devices.
- Handles framing, error detection, and MAC addressing.

### Network Layer
- Responsible for logical addressing and routing.
- Uses IP addresses to deliver packets across networks.

### Transport Layer
- Ensures end-to-end communication between devices.
- Uses TCP and UDP for data transfer.

### Session Layer
- Establishes, manages, and terminates communication sessions.

### Presentation Layer
- Handles data formatting, compression, and encryption.

### Application Layer
- Provides services directly to applications and users.
- Examples: HTTP, FTP, SMTP, DNS.

## Transport Layer

- Responsible for reliable and transparent communication between end systems.
- Breaks data into smaller units for transmission.
- Uses TCP and UDP as its primary protocols.

## TCP (Transmission Control Protocol)

- A connection-oriented transport layer protocol.
- Provides reliable communication between devices.
- Ensures data arrives correctly and in order.

### Key Characteristics

- Connection-Oriented Communication
- Reliable Delivery
- Ordered Data Transfer
- Error Detection and Recovery
- Flow Control
- Congestion Control

### TCP Header Fields

- Source Port
- Destination Port
- Sequence Number
- Acknowledgment Number
- Control Flags (SYN, ACK, FIN, RST)
- Checksum

### How TCP Works

#### Connection Establishment

- Uses a three-way handshake.
- Synchronizes communication parameters.

#### Data Segmentation

- Divides large data into smaller segments.

#### Reliable Delivery

- Uses acknowledgments (ACKs).
- Retransmits lost packets.

#### Flow Control

- Adjusts transmission rate based on receiver capacity.

#### Connection Termination

- Uses a four-way handshake to close the connection.

### Congestion Control

- Slow Start
- Congestion Avoidance
- Congestion Window
- Explicit Congestion Notification (ECN)
- Fast Retransmit and Recovery

### Handling Out-of-Order Packets

- Sequence Numbers identify packet order.
- Out-of-order packets are buffered.
- ACKs confirm received data.
- SACK identifies missing packets.
- Missing packets are retransmitted.

## UDP (User Datagram Protocol)

- A connectionless transport layer protocol.
- Prioritizes speed and efficiency.
- Does not guarantee packet delivery or ordering.

### Key Characteristics

- Connectionless Communication
- Fast and Lightweight
- Low Overhead
- Unreliable Delivery
- Real-Time Communication

### Common Use Cases

- DNS
- VoIP
- Video Streaming
- Online Gaming
- Real-Time Applications

### UDP Header Fields

- Source Port
- Destination Port
- Length
- Checksum

### How UDP Works

#### Sender Preparation

- Creates the message and destination information.

#### Message Packaging

- Encapsulates data into a UDP datagram.

#### Packet Transmission

- Sends packets directly without establishing a connection.

#### Receiver Reception

- Receives packets on the designated port.

#### Message Processing

- Processes the received data.
- Reliability is handled by the application if required.

## TCP vs UDP

| Feature | TCP | UDP |
|----------|-----|-----|
| Connection | Connection-Oriented | Connectionless |
| Reliability | Reliable | Best Effort |
| Packet Ordering | Guaranteed | Not Guaranteed |
| Error Recovery | Yes | No |
| Speed | Slower | Faster |
| Overhead | Higher | Lower |
| Flow Control | Yes | No |
| Congestion Control | Yes | No |
| Common Uses | Web Browsing, File Transfer, Email | Streaming, Gaming, VoIP, DNS |

## Summary

- TCP focuses on reliability, ordered delivery, and error recovery.
- UDP focuses on speed, low latency, and minimal overhead.
- TCP is ideal when data integrity is critical.
- UDP is ideal when real-time performance is more important than guaranteed delivery.

