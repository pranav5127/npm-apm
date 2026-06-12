# Wireshark TCP Display Filters Cheat Sheet

## 1. Show All TCP Traffic

```wireshark
tcp
```

---

## 2. Filter by TCP Port

### Source Port

```wireshark
tcp.srcport == 443
```

### Destination Port

```wireshark
tcp.dstport == 80
```

### Either Source or Destination

```wireshark
tcp.port == 22
```

---

## 3. Filter by TCP Flags

### SYN

```wireshark
tcp.flags.syn == 1
```

### SYN-ACK

```wireshark
tcp.flags.syn == 1 && tcp.flags.ack == 1
```

### ACK

```wireshark
tcp.flags.ack == 1
```

### FIN

```wireshark
tcp.flags.fin == 1
```

### RST

```wireshark
tcp.flags.reset == 1
```

### PSH

```wireshark
tcp.flags.push == 1
```

### URG

```wireshark
tcp.flags.urg == 1
```

---

## 4. TCP Three-Way Handshake

### Initial SYN

```wireshark
tcp.flags.syn == 1 && tcp.flags.ack == 0
```

### SYN-ACK

```wireshark
tcp.flags.syn == 1 && tcp.flags.ack == 1
```

### Final ACK

```wireshark
tcp.flags.ack == 1 &&
tcp.flags.syn == 0 &&
tcp.flags.fin == 0 &&
tcp.flags.reset == 0
```

---

## 5. Connection Termination

### FIN Packets

```wireshark
tcp.flags.fin == 1
```

### Reset Connections

```wireshark
tcp.flags.reset == 1
```

---

## 6. Filter by IP and TCP

### Traffic Between Two Hosts

```wireshark
ip.addr == 192.168.1.10 &&
ip.addr == 192.168.1.20 &&
tcp
```

### TCP Traffic to a Host

```wireshark
ip.addr == 192.168.1.10 && tcp
```

---

## 7. Filter by TCP Stream

```wireshark
tcp.stream == 5
```

---

## 8. Retransmission Filters

### Retransmissions

```wireshark
tcp.analysis.retransmission
```

### Fast Retransmissions

```wireshark
tcp.analysis.fast_retransmission
```

### Spurious Retransmissions

```wireshark
tcp.analysis.spurious_retransmission
```

---

## 9. Duplicate ACKs

```wireshark
tcp.analysis.duplicate_ack
```

---

## 10. Out-of-Order Segments

```wireshark
tcp.analysis.out_of_order
```

---

## 11. Lost Segments

```wireshark
tcp.analysis.lost_segment
```

---

## 12. Zero Window Problems

### Receiver Window Full

```wireshark
tcp.analysis.window_full
```

### Zero Window

```wireshark
tcp.window_size == 0
```

### Zero Window Probe

```wireshark
tcp.analysis.zero_window_probe
```

---

## 13. TCP Keepalive Packets

```wireshark
tcp.analysis.keep_alive
```

### Keepalive ACK

```wireshark
tcp.analysis.keep_alive_ack
```

---

## 14. Bad TCP Checksums

```wireshark
tcp.checksum_bad == 1
```

---

## 15. Packet Size Filters

### TCP Payload Exists

```wireshark
tcp.len > 0
```

### Large Payloads

```wireshark
tcp.len > 1000
```

---

## 16. Sequence and Acknowledgment Numbers

### Specific Sequence Number

```wireshark
tcp.seq == 1000
```

### Specific ACK Number

```wireshark
tcp.ack == 2000
```

---

## 17. Window Size Analysis

### Small Receive Window

```wireshark
tcp.window_size < 1000
```

### Large Receive Window

```wireshark
tcp.window_size > 50000
```

---

## 18. TCP Expert Analysis Filters

```wireshark
tcp.analysis.flags
```

Shows:

- Retransmissions
- Fast Retransmissions
- Duplicate ACKs
- Out-of-Order Packets
- Lost Segments
- Window Full
- Zero Window
- Keepalives

---

# Most Useful Filters for PCAP Analysis

```wireshark
tcp.stream == X
tcp.analysis.flags
tcp.analysis.retransmission
tcp.analysis.fast_retransmission
tcp.analysis.duplicate_ack
tcp.analysis.out_of_order
tcp.analysis.lost_segment
tcp.flags.reset == 1
tcp.flags.syn == 1 && tcp.flags.ack == 0
tcp.window_size == 0
tcp.len > 0
```
