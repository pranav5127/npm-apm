# Wireshark TCP Analysis Flags

This document explains the most common TCP Analysis messages shown by Wireshark under **SEQ/ACK Analysis**.

---

# TCP Previous Segment Not Captured

## Meaning

Wireshark expected a lower sequence number but observed a higher one.

Example:

```text
Expected: Seq=1500
Observed: Seq=3000
```

Bytes between 1500 and 2999 are missing from the capture.

## Causes

- Packet loss
- Capture started late
- Capture drops
- SPAN/mirror port issues

## Wireshark Message

```text
[TCP Previous Segment Not Captured]
```

---

# TCP Dup ACK

## Meaning

The receiver repeatedly acknowledges the same sequence number because data is missing.

Example:

```text
ACK=1500
ACK=1500
ACK=1500
```

This means:

> "I am still waiting for byte 1500."

## Causes

- Packet loss
- Out-of-order delivery

## Wireshark Message

```text
[TCP Dup ACK]
```

---

# TCP Retransmission

## Meaning

The sender retransmits data that Wireshark has already seen.

Example:

```text
Seq=1500
Seq=1500
```

The second packet is a retransmission.

## Causes

- Lost packets
- Timeout expiration

## Wireshark Message

```text
[TCP Retransmission]
```

---

# TCP Fast Retransmission

## Meaning

A retransmission triggered by duplicate ACKs rather than a timeout.

Example:

```text
ACK=1500
ACK=1500
ACK=1500
```

Sender immediately retransmits:

```text
Seq=1500
```

## TCP Recovery Process

```text
Packet Lost
     ↓
Duplicate ACKs
     ↓
Fast Retransmission
     ↓
Recovery
```

## Wireshark Message

```text
[TCP Fast Retransmission]
```

---

# TCP Out-Of-Order

## Meaning

Packets arrived in a different order than they were sent.

Example:

```text
Sent:
1000
1500
3000

Received:
1000
3000
1500
```

No packet loss necessarily occurred.

## Causes

- Multipath routing
- Network reordering

## Wireshark Message

```text
[TCP Out-Of-Order]
```

---

# TCP Spurious Retransmission

## Meaning

The sender retransmitted data that was already acknowledged.

Example:

```text
Receiver ACKs up to 3000

Later:

Seq=1500
```

The retransmission was unnecessary.

## Causes

- Delayed ACKs
- Reordering
- RTT estimation issues

## Wireshark Message

```text
[TCP Spurious Retransmission]
```

---

# TCP Keep-Alive

## Meaning

A probe used to check whether the remote endpoint is still alive.

Example:

```text
Expected Seq=5000

Keepalive:
Seq=4999
Len=0 or 1
```

## Purpose

Verify that the connection still exists.

## Wireshark Message

```text
[TCP Keep-Alive]
```

---

# TCP Keep-Alive ACK

## Meaning

Response to a keepalive probe.

Example:

```text
ACK=5000
```

Meaning:

> "I am still alive."

## Wireshark Message

```text
[TCP Keep-Alive ACK]
```

---

# TCP Zero Window

## Meaning

The receiver cannot accept additional data.

Example:

```text
Window=0
```

Meaning:

> "Stop sending data."
>
> "My receive buffer is full."

## Causes

- Slow application
- Receiver overload
- Memory pressure

## Wireshark Message

```text
[TCP ZeroWindow]
```

---

# TCP Zero Window Probe

## Meaning

The sender checks whether the receiver's window has opened.

Example:

```text
Window=0
```

Sender transmits:

```text
Len=1
```

Meaning:

> "Can you receive data now?"

## Wireshark Message

```text
[TCP ZeroWindowProbe]
```

---

# TCP Zero Window Probe ACK

## Meaning

Response to a Zero Window Probe.

Example:

```text
Window=0
```

Meaning:

> "No, I'm still unable to receive data."

## Wireshark Message

```text
[TCP ZeroWindowProbeAck]
```

---

# TCP Window Update

## Meaning

The receiver increases its advertised window.

Example:

Before:

```text
Window=0
```

After:

```text
Window=32768
```

Meaning:

> "You may resume sending data."

## Wireshark Message

```text
[TCP Window Update]
```

---

# TCP Window Full

## Meaning

The sender filled the entire advertised receive window.

Example:

```text
Receiver Window = 1000
Sender Data   = 1000
```

## Notes

This is often normal behavior.

## Wireshark Message

```text
[TCP Window Full]
```

---

# TCP ACKed Unseen Segment

## Meaning

Wireshark sees an ACK for data that it never observed.

Example:

Missing packet:

```text
Seq=1000 Len=500
```

Observed ACK:

```text
ACK=1500
```

## Causes

- Capture started late
- Dropped packets in capture
- SPAN/mirror issues

## Wireshark Message

```text
[TCP ACKed Unseen Segment]
```

---

# TCP Port Numbers Reused

## Meaning

A new SYN packet appears using a port pair already associated with another TCP conversation.

## Causes

- Connection restarted
- Port reused by operating system

## Wireshark Message

```text
[TCP Port Numbers Reused]
```

---

# Common TCP Troubleshooting Flow

## Packet Loss

```text
TCP Previous Segment Not Captured
               ↓
           Dup ACK
               ↓
      Fast Retransmission
               ↓
          Recovery
```

## Receiver Overload

```text
TCP ZeroWindow
        ↓
TCP ZeroWindowProbe
        ↓
TCP ZeroWindowProbeAck
        ↓
TCP Window Update
        ↓
Transmission Resumes
```

---

# Most Important Flags

| Flag | Typical Meaning |
|--------|----------------|
| Previous Segment Not Captured | Missing packets |
| Dup ACK | Receiver detected a gap |
| Fast Retransmission | Sender reacting to loss |
| Retransmission | Lost packet or timeout |
| Out-Of-Order | Packet reordering |
| Spurious Retransmission | Unnecessary retransmission |
| Zero Window | Receiver overloaded |
| Window Update | Receiver recovered |
| Window Full | Receive window exhausted |
| Keep-Alive | Connection health check |
