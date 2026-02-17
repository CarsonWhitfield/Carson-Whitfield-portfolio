"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "../../../../Theme";

// Local accordion component so we can reuse it cleanly
function Accordion({
  id,
  title,
  openId,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  openId: string | null;
  onToggle: (id: string | null) => void; // allow null to close
  children: React.ReactNode;
}) {
  const isOpen = openId === id;
  return (
    <div id={id} className="rounded-2xl border bg-white/80 dark:bg-gray-900/70 backdrop-blur shadow-sm">
      <button
        type="button"
        onClick={() => onToggle(isOpen ? null : id)}
        className="w-full text-left p-5 flex items-center justify-between gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden border-t p-5">{children}</div>
      </div>
    </div>
  );
}

export default function OSIModelPage() {
  const [open, setOpen] = useState<string | null>(null);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "topology", label: "Network Topology" },
    { id: "tcp/ip model mapping", label: "TCP/IP Model Mapping" },
    { id: "lab setup", label: "Lab setup" },
    { id: "http protocol", label: "HTTP Protocol" },
    { id: "conclusion", label: "Conclusion" },
  ] as const;

  return (

      <main
        className="min-h-screen bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 bg-[url('/Background/Background-IT.png')] dark:bg-[url('/Background/Background-IT-light.png')]"
      >
    
        {/* Overlay for better contrast on busy backgrounds */}
        <div className="min-h-screen ">
          {/* Header / Nav */}
          <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/50 bg-white/30 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <h1 className="text-xl font-bold tracking-tight">TCP/IP Model Example</h1>
              <div className="flex items-center gap-2">
                {/* Top nav links */}
                <nav className="hidden md:flex items-center gap-2 mr-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
                {/* Button for dark and light mode */}
                <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 gap-6">
            {/* Content */}
            <section className="space-y-6">
              {/* Overview */}
              <div
                id="overview"
                className="rounded-2xl border bg-white/80 dark:bg-gray-900/70 backdrop-blur p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  This section describes the TCP/IP Model example, including the physical/logical topology, and protocol flows for HTTP.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-200">
                  <li>switch, server, laptop and a PC connected via copper straight-through.</li>
                  <li>Layer-by-layer mapping of functionality from Physical up to Application.</li>
                </ul>
              </div>

              {/* Network Topology */}
              <div
                id="topology"
                className="rounded-2xl border bg-white/80 dark:bg-gray-900/70 backdrop-blur p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-2">Network Topology</h2>
                <p className="mb-3 text-gray-800 dark:text-gray-200">Physical connections in this example:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>PC1</strong> ↔ <strong>3650-24PS Router</strong>: Copper <em>straight-through</em> cable
                  </li>
                  <li>
                    <strong>3650-24PS Router</strong> ↔ <strong>Laptop</strong>: Copper <em>straight-through</em> cable
                  </li>
                  <li>
                    <strong>3650-24PS S1</strong> ↔ <strong>Server-PT</strong>: Copper <em>straight-through</em> cable
                  </li>
                </ul>
              </div>

              {/* TCP/IP Mapping */}
              <div
                id="tcp/ip model mapping"
                className="rounded-2xl border bg-white/80 dark:bg-gray-900/70 backdrop-blur p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-4">TCP/IP Model Mapping</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 1 – Link (Network Access Layer)</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <h1 className="font-semibold mb-2">Purpose:</h1>
                      <li>Handles psychological connection and data transfer between devices on the same network.</li>
                      <h2 className="font-semibold mb-2">In the topology:</h2>
                      <li>In this example, the Switch (3650-24PS) and the Ethernet cables and network interface cards (NICs) in the laptops all operate on layer 1. This layer defines how frames are sent.</li>
                      <h2 className="font-semibold mb-2">Example protocols:</h2>
                      <li>Each device (Laptop1, Laptop2, Server0) has its own IP address:</li>
                  </ul>    
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 2 – Internet</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <h5 className="font-semibold mb-2">Purpose:</h5>
                      <li>This layer is responsible for logical addresning (IP addresses) and routing data between different networks</li>
                      <h5 className="font-semibold mb-2">In the topology:</h5>
                      <li>Switch 1 and 2 forward frames based on MAC addresses:</li>
                      <ul className="list-[circle] pl-6 space-y-1">
                          <li>PC1: 192.168.1.1</li>
                          <li>Laptop2: 192.168.1.2</li>
                          <li>Server1: 192.168.1.3</li>
                      </ul>
                      <li>This layer handles how these devices identify and communicate using IP addresses.</li>
                      <h2 className="font-semibold mb-2">Example protocols:</h2>
                      <li>IP (Internet Protocol), ICMP (for ping), ARP (address resolution)</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 3 – Transport</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <h6 className="font-semibold mb-2">Purpose:</h6>
                      <li>Provides end-to-end communication between devices — ensures reliable or fast delivery depending on protocol.</li>
                      <h6 className="font-semibold mb-2">In the topology:</h6>
                      <li>When Laptop1 pings the server or opens a connection, the Transport layer ensures data is properly sent and received</li>
                      <li>Depending on the application, this layer could use:</li>
                      <ul className="list-[circle] pl-6 space-y-1">
                          <li>TCP – reliable (e.g., HTTP, FTP)</li>
                          <li>UDP – faster, connectionless (e.g., DNS, DHCP)</li>
                      </ul>
                      <h6 className="font-semibold mb-2">Example protocols:</h6>
                      <li>TCP (Transmission Control Protocol), UDP (User Datagram Protocol)</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 4 – Application Layer</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <h3>Purpose:</h3>
                      <li>Where user-facing applications and services operate.</li>
                      <h2>In your topology:</h2>
                      <li>Example: maintaining a session during remote login</li>
                      <li>When Laptop1 accesses the server’s web page, email, or file share, it’s handled here</li>
                      <li>Examples:</li>
                      <ul className="list-[circle] pl-6 space-y-1">
                          <li>HTTP (web traffic)</li>
                          <li>FTP (file transfer)</li>
                          <li>DHCP (automatic IP assignment)</li>
                          <li>DNS (name resolution)</li>
                      </ul>
                      <h2>Example protocols:</h2>
                      <li>HTTP, HTTPS, FTP, DNS, DHCP, SMTP, Telnet, SSH</li>
                    </ul>
                  </div>

                <div className="rounded-xl border p-4">
                  <h3 className="font-semibold mb-2">TCP/IP Layout</h3>
                  <div className="pl-2">
                    <Image
                      src="/TCP-IP/TCPIP-layout2.jpg"
                      alt="TCP/IP Layout Diagram"
                      width={1300}
                      height={2000}
                      className="object-contain scale "
                    />
                  </div>
              </div>
              
              <div className="rounded-xl border p-4">
                  <h3 className="font-semibold mb-2">TCP/IP Layout</h3>
                  <div className="pl-2">
                    <Image
                      src="/TCP-IP/TCP-IP.jpg"
                      alt="TCP/IP Layout Diagram"
                      width={900}
                      height={450}
                      className="rounded mb-3"
                    />
                  </div>
              </div>
          
            
        
          </div>
        </div>
              
              {/* Seting up the lab */}
              <Accordion id="lab setup" title="Lab setup" openId={open} onToggle={setOpen}>
                <div className="space-y-4">
                <div className="rounded-xl border p-4 md:col-span-2">
                  <h2>Step 1</h2>
                  <p>In this lab, I access the server from PC1 via a web browser. I then click the image link to send a packet through the network to the server.</p>
                </div>

                
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Simulation</h3>
                      <Image
                        src="/TCP-IP/PC1-w.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  
                
              
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Simulation</h3>
                      <Image
                        src="/TCP-IP/sim-panel.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>
                
              </Accordion>


              {/* HTTP Protocol */}
              <Accordion id="http protocol" title="HTTP Protocol:" openId={open} onToggle={setOpen}>
                <div className="space-y-4">
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-3 text-lg">PC1 - outbound pdu</h3>
                    <h2 className="font-semibold mb-2 ml-8">Layer 7 – Application Layer (HTTP)</h2>
                    <li className="ml-20">Protocol: HTT</li>
                    <p className="ml-20">This is an HTTP request header, typically part of a GET request to retrieve a webpage.</p>
                    <ul className="ml-22 list-[circle] pl-6 space-y-1">
                      <li>Accept-Language: en-us → Client prefers English (U.S.) responses.</li>
                      <li>Accept: */* → Client can accept any MIME type (text, images, etc.).</li>
                    </ul>
                    <p className="ml-20">This is the user-level data being transmitted across the network.</p>
                    <hr className="my-4 border-t border-gray-300" />

                    <h2 className="font-semibold mb-2 ml-8">Layer 4 – Transport Layer (TCP)</h2>
                    <li className="ml-20">Protocol: TCP</li>
                    <li className="ml-20">Source Port: 1026</li>
                    <li className="ml-20">Destination Port: 80</li>
                    <li className="ml-20">Flags: 0b00011000 → PSH + ACK</li>
                    <li className="ml-20">The TCP segment ensures reliable delivery of the HTTP message:</li>
                    <ul className="ml-22 list-[circle] pl-6 space-y-1">
                      <li>The source port (1026) identifies the local application (browser)</li>
                      <li>The destination port (80) identifies the remote web server service</li>
                      <li>PSH (Push) flag means “send this data immediately.</li>
                      <li>ACK confirms previous data was received</li>
                      <li>TCP guarantees the packet arrives correctly and in order</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h2 className="font-semibold mb-2 ml-8">Layer 3 – Network Layer (IP)</h2>
                    <li className="ml-20">Protocol: IPv4</li>
                    <li className="ml-20">Source IP: 192.168.1.1</li>
                    <li className="ml-20">Destination IP: 192.168.1.3</li>
                    <li className="ml-20">TTL: 128</li>
                    <li className="ml-20">Protocol field (PRO): 0x06 (TCP)</li>
                    <li className="ml-20">Header Length (IHL): 5</li>
                    <li className="ml-20">Flags: 0x2 (Don’t Fragment)</li>
                    <li className="ml-20">Identification: 0x0008</li>
                    <li className="ml-20">The IP packet encapsulates the TCP segment and provides logical addressing</li>
                    <ul className="ml-22 list-[circle] pl-6 space-y-1">
                      <li>The packet is routed from PC1 (192.168.1.1) to Server (192.168.1.3)</li>
                      <li>TTL (128) limits how many hops the packet can take</li>
                      <li>Since both devices are on the same subnet, this packet will go directly to the server via the switch</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h2 className="font-semibold mb-2 ml-8">Layer 2 – Data Link Layer (Ethernet II)</h2>
                    <li className="ml-20">Source MAC: 0001.1111.1111</li>
                    <li className="ml-20">Destination MAC: 0003.3333.3333</li>
                    <li className="ml-20">Type: 0x0800 (IPv4)</li>
                    <li className="ml-20">FCS: 0x00000000</li>
                    <li className="ml-20">FCS: 0x00000000The Ethernet frame is what actually gets transmitted across the local network:</li>
                    <ul className="ml-22 list-[circle] pl-6 space-y-1">
                      <li>The source MAC is PC1’s NIC address</li>
                      <li>The destination MAC is the server or switch interface</li>
                      <li>EtherType 0x0800 indicates that the payload is an IPv4 packet.</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h2 className="font-semibold mb-2 ml-8">Layer 1 – Physical Layer</h2>
                    <li className="ml-20">Preamble: 10101010...10 (synchronization bits)</li>
                    <p className="ml-20">The PDU becomes raw electrical or optical signals on the cable.
The preamble ensures both sender and receiver are in sync for bit timing
</p>
                    <hr className="my-4 border-t border-gray-300" />

                    <h2 className="font-semibold mb-2 ml-8"> Relationship to the Switch PDU</h2>
                    <li className="ml-20">The PC1 (Outbound) and Multilayer Switch (Inbound) PDUs represent the same frame at two different points</li>
                    <li className="ml-20">The outbound PDU from PC1 is identical in headers and data to the inbound PDU at the switch — the only change is where the frame is located in the network</li>
                    <li className="ml-20">Once the switch receives it, it reads the Layer 2 header, determines the destination, and forwards it toward the web server</li>
                </div>

                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">PC1 Outbound PDU </h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/TCP-IP/PC1-pdu.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>
                
                
                  
                
                  <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-3 text-lg">Switch - Inbound PDU</h3>
                    <h2 className="font-semibold mb-2 ml-8">Layer 7 – Application Layer (HTTP)</h2>
                    <li className="ml-20">Protocol: HTTP</li>
                    <p className="ml-20">This is an HTTP request header, typically part of a GET request to retrieve a webpage.</p>
                    <h1 className="font-semibold mb-2 ml-16">Data:</h1>
                    <ul className="ml-14 list-disc pl-6 space-y-1">
                      <li>Accept-Language: en-us → Client prefers English (U.S.) responses.</li>
                      <li>Accept: */* → Client can accept any MIME type (text, images, etc.).</li>
                    </ul>
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 4 – Transport (TCP)</h3>
                    <li className="ml-20">Protocol: TCP</li>
                    <li className="ml-20">Source Port: 1026</li>
                    <li className="ml-20">Destination Port: 80 (standard web server port)</li>
                    <li className="ml-20">Flags: 0b00011000 (ACK + PSH flags set)</li>
                    <li className="ml-20">Sequence Number: 1</li>
                    <li className="ml-20">Acknowledgment Number: 1</li>
                    <li className="ml-20">Window Size: 65535</li>
                    <li className="ml-20">Checksum: 0x0000</li>
                    <li className="ml-20">This layer provides reliable delivery using TCP.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The source port (1026) identifies the client session</li>
                      <li>The destination port (80) targets the web service</li>
                      <li>The ACK and PSH flags indicate the segment is part of an active connection carrying data that should be pushed to the application immediately</li>
                      <li>Checksum ensures segment integrity</li>
                    </ul>
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 3 – Network (IP)</h3>
                    <li className="ml-20">Protocol: IP (IPv4)</li>
                    <li className="ml-20">Source IP: 192.168.1.1</li>
                    <li className="ml-20">Destination IP: 192.168.1.3</li>
                    <li className="ml-20">TTL: 128</li>
                    <li className="ml-20">Protocol Field: 0x06 (TCP)</li>
                    <li className="ml-20">Identification: 0x0008</li>
                    <li className="ml-20">Flags: 0x2 (Don’t Fragment bit set)</li>
                    <li className="ml-20">Header Length: 20 bytes (IHL = 5)</li>
                    <p className="ml-15">This layer provides logical addressing and routing. The packet travels from the source host (192.168.1.1) to the destination host (192.168.1.3) on the same subnet</p>
                    <hr className="my-4 border-t border-gray-300" />
                    
                    <h3 className="font-semibold mb-2 ml-8">Layer 2 – Data Link (Ethernet II)</h3>
                    <li className="ml-20">Destination MAC: 0003.3333.3333</li>
                    <li className="ml-20">Source MAC: 0001.1111.1111</li>
                    <li className="ml-20">Type: 0x0800 (indicates the payload is an IPv4 packet)</li>
                    <li className="ml-20">FCS: 0x00000000 (placeholder for frame check sequence)</li>
                    <li className="ml-20">This layer provides physical addressing so that frames can be delivered to the correct device on the LAN segment.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The Ether Type 0x0800 shows this frame encapsulates an IPv4 packet</li>
                      <li>FCS verifies the frame integrity upon receipt</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 1 – Physical</h3>
                    <p className="ml-16">The frame bits (101010...10) represent the preamble, which helps the receiving NIC synchronize before reading the rest of the bits. These bits are transmitted as electrical or optical signals across the cable.</p>
                  </div>
              
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Switch - Inbound PDU</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/TCP-IP/S1-pdu.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>

                
                  <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-3 text-lg">Switch - Outbount PDU</h3>
                    <h2 className="font-semibold mb-2 ml-8">Layer 7 – Application Layer (HTTP)</h2>
                    <li className="ml-20">Protocol: HTTP</li>
                    <p className="ml-20">This is an HTTP request header, typically part of a GET request to retrieve a webpage.</p>
                    <h1 className="font-semibold mb-2 ml-16">Data:</h1>
                    <ul className="ml-14 list-disc pl-6 space-y-1">
                      <li>Accept-Language: en-us → Client prefers English (U.S.) responses.</li>
                      <li>Accept: */* → Client can accept any MIME type (text, images, etc.).</li>
                    </ul>
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 4 – Transport (TCP)</h3>
                    <li className="ml-20">Protocol: TCP</li>
                    <li className="ml-20">Source Port: 1033</li>
                    <li className="ml-20">Destination Port: 80 (standard web server port)</li>
                    <li className="ml-20">Flags: 0b00011000 (ACK + PSH flags set)</li>
                    <li className="ml-20">Sequence Number: 1</li>
                    <li className="ml-20">Acknowledgment Number: 1</li>
                    <li className="ml-20">Window Size: 65535</li>
                    <li className="ml-20">Checksum: 0x0000</li>
                    <li className="ml-20">This layer provides reliable delivery using TCP.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The source port (1033) identifies the client session</li>
                      <li>The destination port (80) targets the web service</li>
                      <li>The ACK and PSH flags indicate the segment is part of an active connection carrying data that should be pushed to the application immediately</li>
                      <li>Checksum ensures segment integrity</li>
                    </ul>
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 3 – Network (IP)</h3>
                    <li className="ml-20">Protocol: IP (IPv4)</li>
                    <li className="ml-20">Source IP: 192.168.1.1</li>
                    <li className="ml-20">Destination IP: 192.168.1.3</li>
                    <li className="ml-20">TTL: 128</li>
                    <li className="ml-20">Protocol Field: 0x06 (TCP)</li>
                    <li className="ml-20">Identification: 0x0029</li>
                    <li className="ml-20">Flags: 0x2 (Don’t Fragment bit set)</li>
                    <li className="ml-20">Header Length: 20 bytes (IHL = 5)</li>
                    <p className="ml-15">This layer provides logical addressing and routing. The packet travels from the source host (192.168.1.1) to the destination host (192.168.1.3) on the same subnet</p>
                    <hr className="my-4 border-t border-gray-300" />
                    
                    <h3 className="font-semibold mb-2 ml-8">Layer 2 – Data Link (Ethernet II)</h3>
                    <li className="ml-20">Destination MAC: 0003.3333.3333</li>
                    <li className="ml-20">Source MAC: 0001.1111.1111</li>
                    <li className="ml-20">Type: 0x0800 (indicates the payload is an IPv4 packet)</li>
                    <li className="ml-20">FCS: 0x00000000 (placeholder for frame check sequence)</li>
                    <li className="ml-20">This layer provides physical addressing so that frames can be delivered to the correct device on the LAN segment.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The Ether Type 0x0800 shows this frame encapsulates an IPv4 packet</li>
                      <li>FCS verifies the frame integrity upon receipt</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 1 – Physical</h3>
                    <p className="ml-16">The frame bits (101010...10) represent the preamble, which helps the receiving NIC synchronize before reading the rest of the bits. These bits are transmitted as electrical or optical signals across the cable.</p>
                  </div>
                
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Switch - Inbound PDU</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/TCP-IP/Switch-out.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Server - Inbound pdu</h3>
                    <h2 className="font-semibold mb-2 ml-8">Layer 7 – Application Layer (HTTP)</h2>
                    <p className="ml-20">There is no HTTP data in this packet.</p>
                    
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 4 – Transport (TCP)</h3>
                    <li className="ml-20">Protocol: TCP</li>
                    <li className="ml-20">Source Port: 80 (HTTP service )</li>
                    <li className="ml-20">Destination Port: 1026 (Client seesion)</li>
                    <li className="ml-20">Sequence Number: 0</li>
                    <li className="ml-20">Acknowledgment Number: 1</li>
                    <li className="ml-20">Flags: 0b00010010 → ACK</li>
                    <li className="ml-20">Window: 16384</li>
                    <li className="ml-20">Checksum: 0x0000</li>
                    <li className="ml-20">This layer provides reliable delivery using TCP.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The source port (80) identifies the client session</li>
                      <li>The destination port (1026) targets the web service</li>
                      <li>The ACK  flag indicate the segment is part of an active connection carrying data that should be pushed to the application immediately</li>
                      <li>Checksum ensures segment integrity</li>
                    </ul>
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 3 – Network (IP)</h3>
                    <li className="ml-20">Protocol: IP (IPv4)</li>
                    <li className="ml-20">Source IP: 192.168.1.3 (server)</li>
                    <li className="ml-20">Destination IP: 192.168.1.1 (client)</li>
                    <li className="ml-20">TTL: 128</li>
                    <li className="ml-20">Protocol Field: 0x06 (TCP)</li>
                    <li className="ml-20">Identification: 0x0004</li>
                    <li className="ml-20">Flags: 0x2 (Don’t Fragment bit set)</li>
                    <p className="ml-15">This layer provides logical addressing and routing. The packet travels from the source host (192.168.1.1) to the destination host (192.168.1.3) on the same subnet</p>
                    <hr className="my-4 border-t border-gray-300" />
                    
                    <h3 className="font-semibold mb-2 ml-8">Layer 2 – Data Link (Ethernet II)</h3>
                    <li className="ml-20">Destination MAC: 0003.3333.3333 (Server NIC)</li>
                    <li className="ml-20">Source MAC: 0001.1111.1111 (Client NIC)</li>
                    <li className="ml-20">Type: 0x0800 (indicates the payload is an IPv4 packet)</li>
                    <li className="ml-20">FCS: 0x00000000 (placeholder for frame check sequence)</li>
                    <li className="ml-20">This layer provides physical addressing so that frames can be delivered to the correct device on the LAN segment.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The Ether Type 0x0800 shows this frame encapsulates an IPv4 packet</li>
                      <li>FCS verifies the frame integrity upon receipt</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 1 – Physical</h3>
                    <p className="ml-16">The frame bits (101010...10) represent the preamble, which helps the receiving NIC synchronize before reading the rest of the bits. These bits are transmitted as electrical or optical signals across the cable.</p>
              </div>
              

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Server - Inbound PDU</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/TCP-IP/S1-pdu.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Server - Outbound pdu</h3>
                    <h2 className="font-semibold mb-2 ml-8">Layer 7 – Application Layer (HTTP)</h2>
                    <p className="ml-20">There is no HTTP data in this packet.</p>
                    
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 4 – Transport (TCP)</h3>
                    <li className="ml-20">Protocol: TCP</li>
                    <li className="ml-20">Source Port: 80 (HTTP service )</li>
                    <li className="ml-20">Destination Port: 1026 (Client seesion)</li>
                    <li className="ml-20">Sequence Number: 0</li>
                    <li className="ml-20">Acknowledgment Number: 1</li>
                    <li className="ml-20">Flags: 0b00010010 → ACK</li>
                    <li className="ml-20">Window: 16384</li>
                    <li className="ml-20">Checksum: 0x0000</li>
                    <li className="ml-20">This layer provides reliable delivery using TCP.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The source port (80) identifies the client session</li>
                      <li>The destination port (1026) targets the web service</li>
                      <li>The ACK  flag indicate the segment is part of an active connection carrying data that should be pushed to the application immediately</li>
                      <li>Checksum ensures segment integrity</li>
                    </ul>
                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 3 – Network (IP)</h3>
                    <li className="ml-20">Protocol: IP (IPv4)</li>
                    <li className="ml-20">Source IP: 192.168.1.3</li>
                    <li className="ml-20">Destination IP: 192.168.1.1</li>
                    <li className="ml-20">TTL: 128</li>
                    <li className="ml-20">Protocol Field: 0x06 (TCP)</li>
                    <li className="ml-20">Identification: 0x0004</li>
                    <li className="ml-20">Flags: 0x2 (Don’t Fragment bit set)</li>
                    <p className="ml-15">This layer provides logical addressing and routing. The packet travels from the source host (192.168.1.1) to the destination host (192.168.1.3) on the same subnet</p>
                    <hr className="my-4 border-t border-gray-300" />
                    
                    <h3 className="font-semibold mb-2 ml-8">Layer 2 – Data Link (Ethernet II)</h3>
                    <li className="ml-20">Destination MAC: 0003.3333.3333 (Server NIC)</li>
                    <li className="ml-20">Source MAC: 0001.1111.1111 (Client NIC)</li>
                    <li className="ml-20">Type: 0x0800 (indicates the payload is an IPv4 packet)</li>
                    <li className="ml-20">FCS: 0x00000000 (placeholder for frame check sequence)</li>
                    <li className="ml-20">This layer provides physical addressing so that frames can be delivered to the correct device on the LAN segment.</li>
                    <ul className="ml-23 list-[circle] pl-6 space-y-1">
                      <li>The Ether Type 0x0800 shows this frame encapsulates an IPv4 packet</li>
                      <li>FCS verifies the frame integrity upon receipt</li>
                    </ul>

                    <hr className="my-4 border-t border-gray-300" />

                    <h3 className="font-semibold mb-2 ml-8">Layer 1 – Physical</h3>
                    <p className="ml-16">The frame bits (101010...10) represent the preamble, which helps the receiving NIC synchronize before reading the rest of the bits. These bits are transmitted as electrical or optical signals across the cable.</p>
              </div>
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Server - Outbound PDU</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/TCP-IP/Server-out.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

          </div>
          </Accordion>

            


              {/* conclusion */}
              <Accordion id="conclusion" title="conclusion" openId={open} onToggle={setOpen}>
              <div className="space-y-4">
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Conclusion</h3>
                    <p>The sequence of PDUs captured across PC1, the multilayer switch, and the server demonstrates the complete data encapsulation and delivery process of an HTTP communication over a TCP/IP network. Beginning with PC1’s outbound HTTP request, the message is encapsulated at each OSI layer—from the application data at Layer 7 down to the Ethernet frame at Layer 2—and transmitted as bits at Layer 1. The multilayer switch then forwards the frame based on MAC addressing without altering higher-layer information. Upon reaching the server, the frame is decapsulated, and the server processes the HTTP request. The server responds by sending a TCP acknowledgment (ACK) to confirm successful receipt, followed by an HTTP response containing the requested data. This response is again encapsulated and sent back through the switch to PC1, where it is finally decapsulated and displayed by the web browser.

Overall, these PDUs illustrate the fundamental principles of network communication: encapsulation, reliable transmission through TCP, logical and physical addressing through IP and Ethernet, and the client-server interaction that enables web browsing. The captured frames highlight how each OSI layer contributes to the accurate and reliable exchange of information within a local network.</p>
              </div>

                <div className="mt-4 rounded-xl border p-4 bg-gray-50/80 dark:bg-white/5">
                  <h4 className="font-medium mb-1">Packet Tracer File</h4>
                  <p>
                    If you want to mess around with this lab yourself the <code>.pkt</code> file for Cisco Packet Tracer is linked below.
                    <br />
                    <em>Example:</em>{" "}
                      <a
                        className="text-blue-600 underline"
                        href="https://github.com/CarsonWhitfield/My-Projects/blob/main/IT%20projects/CCNA/TCP-IP/TCP-IP%20Lab.pkt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      Download OSI Topology .pkt
                    </a>
                  </p>
                </div>
              </div>
              </Accordion>

              {/* Footer */}
              <footer className="pt-4 text-sm text-gray-300 dark:text-gray-500">
                <p>TCP/IP Model lab notes.</p>
              </footer>
            </section>
          </div>
        </div>
      </main>
  );
}

