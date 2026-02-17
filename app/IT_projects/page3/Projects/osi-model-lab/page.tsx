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
    { id: "osi-mapping", label: "OSI Model Mapping" },
    { id: "stp", label: "STP Frame Flow" },
    { id: "ospf", label: "OSPF Packet Flow" },
    { id: "dhcp", label: "DHCP Flow & Commands" },
  ] as const;

  return (
    
      <main
        className="min-h-screen bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 bg-[url('/Background/Background-IT.png')] dark:bg-[url('/Background/Background-IT-light.png')]"
      >
        {/* Overlay for better contrast on busy backgrounds */}
        <div className="min-h-screen">
          {/* Header / Nav */}
          <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/50 bg-white/30 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <h1 className="text-xl font-bold tracking-tight">OSI Model Example</h1>
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
                  This section describes the OSI Model example, including the physical/logical topology, OSI
                  layer mapping, and protocol flows for STP, OSPF, and DHCP.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-800 dark:text-gray-200">
                  <li>Routers, switches, a server, and a PC connected via copper straight-through and crossover cables.</li>
                  <li>Layer-by-layer mapping of functionality from Physical up to Application.</li>
                  <li>Step-by-step flows for STP (Layer 2), OSPF (Layer 3), and DHCP (multi-layer) with CLI snippets.</li>
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
                    <strong>Router 1</strong> ↔ <strong>Router 2</strong>: Copper <em>crossover</em> cable
                  </li>
                  <li>
                    <strong>Router 1</strong> ↔ <strong>Switch 1</strong>: Copper <em>straight-through</em> cable
                  </li>
                  <li>
                    <strong>Switch 1</strong> ↔ <strong>Switch 2</strong>: Copper <em>crossover</em> cable
                  </li>
                  <li>
                    <strong>Switch 1</strong> ↔ <strong>Server 1</strong>: Copper <em>straight-through</em> cable
                  </li>
                  <li>
                    <strong>Switch 2</strong> ↔ <strong>PC 1</strong>: Copper <em>straight-through</em> cable
                  </li>
                </ul>
              </div>

              {/* OSI Mapping */}
              <div
                id="osi-mapping"
                className="rounded-2xl border bg-white/80 dark:bg-gray-900/70 backdrop-blur p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold mb-4">OSI Model Mapping</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 1 – Physical</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Transmission medium and signaling</li>
                      <li>In this example: copper cables (straight-through and crossover)</li>
                      <ul className="list-[circle] pl-6 space-y-1">
                          <li>Straight-through cables are used between different device types (router to switch, switch to server/PC)</li>
                          <li>Crossover cables are used between the same device types (router to router, switch to switch)</li>
                      </ul>
                    </ul>     
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 2 – Data Link</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>MAC addressing and switching</li>
                      <li>Switch 1 and 2 forward frames based on MAC addresses</li>
                      <li>Network interface cards (NICs) in PC 1 and Server 1 also operate at this layer</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 3 – Network</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Provides logical addressing and routing</li>
                      <li>Router 1 and 2 make IP-based forwarding decisions</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 4 – Transport</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ensures reliable or connectionless delivery of data</li>
                      <li>Example: PC 1 accessing Server 1 via TCP (HTTP, port 80) or UDP</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 5 – Session</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Establishes and manages sessions between applications</li>
                      <li>Example: maintaining a session during remote login</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4">
                    <h3 className="font-semibold mb-2">Layer 6 – Presentation</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Responsible for Encryption, compression, translation</li>
                      <li>Example: SSL/TLS for secure communication between PC 1 and Server 1</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Layer 7 – Application</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Provides services directly to the user</li>
                      <li>Example: PC 1 using a web browser to access a hosted application on Server 1</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">OSI Model</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/Model_for_osi.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* STP Frame Flow */}
              <Accordion id="stp" title="STP (Spanning Tree Protocol) Frame Flow" openId={open} onToggle={setOpen}>
                <div className="space-y-4">
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Simulation</h3>
                      <Image
                        src="/OSI/STP.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>

                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">STP (Spanning Tree Protocol) Frame Flow</h3>
                    <div className="list-disc pl-6 space-y-1">
                    <h4 className="font-semibold mb-2">Layer 2 – Data Link Layer</h4>   
                    <ol className="list-decimal pl-6 space-y-2">
                      <li>
                        <strong>BPDU Generation</strong>: STP creates a Configuration BPDU containing topology information
                      </li>
                      <li>
                        <strong>Encapsulation</strong>: The BPDU is encapsulated in an IEEE 802.3 Ethernet frame
                      </li>
                      <li>
                        <strong>Frame Transmission</strong>: The switch multicasts the frame out designated ports so neighbors
                        receive it
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">STP layer 2</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/Data_link.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">STP (Spanning Tree Protocol) Frame Flow</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <div className="mt-4">
                        <h4 className="font-medium">Layer 1 – Physical Interfaces</h4>
                          <ul className="list-disc pl-6">
                            <li>FastEthernet0/1</li>
                              <ul className="list-[circle] pl-6">
                                <li>The switch transmits the encapsulated STP BPDU frame out of interface FastEthernet0/1</li>
                              </ul>
                            <li>GigabitEthernet0/1</li>
                              <ul className="list-[circle] pl-6">
                                <li>The switch also transmits the same STP BPDU frame out of interface GigabitEthernet0/1, ensuring all connected segments receive the configuration information</li>
                              </ul>
                          </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">STP layer 1</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/layer1.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
                </div>

              </div>
              </Accordion>


              {/* OSPF Packet Flow */}
              <Accordion id="ospf" title="OSPF (Open Shortest Path First) Packet Flow" openId={open} onToggle={setOpen}>
                <div className="space-y-4">
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Layer 3 – Network</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <strong>OSPF Hello Packet Generation</strong>
                            <ul className="list-[circle] pl-6">
                              <li>The device multicasts an OSPF Hello packet out of interface GigabitEthernet0/1</li>
                            </ul>
                        </li>
                        <li>
                          <strong>Encapsulation into IP Packet</strong>
                            <ul className="list-[circle] pl-6">
                              <li>The OSPF Hello is encapsulated inside an IP packet</li>
                            </ul>
                        </li>
                        <li>
                          <strong>TTL Configuration</strong>
                            <ul className="list-[circle] pl-6">
                              <li>The device sets the Time-to-Live (TTL) value on the IP packet</li>
                            </ul>
                        </li>
                        <li>
                          <strong>Destination IP</strong>
                            <ul className="list-[circle] pl-6">
                              <li>The destination IP address is set to either a broadcast or multicast address.</li>
                              <li>The device uses this address as the next-hop destination.</li>
                            </ul>
                        </li>
                      </ol>
                  </div>
                </div>
                
                

                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">OSPF layer 3</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/layer3-OSPF.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>
                
                
                  
                <div className="rounded-xl border p-4 md:col-span-2">
                  <h4 className="font-medium">Layer 2 Data Link Layer</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>MAC Address Resolution</li>
                    <ul className="list-[circle] pl-6">
                        <li>Because the next-hop IP address is multicast, the ARP process maps it to the appropriate multicast MAC address</li>
                    </ul>
                    <li>Encapsulation into Ethernet Frame</li>
                    <ul className="list-[circle] pl-6">
                        <li>The IP packet is encapsulated inside an Ethernet (IEEE 802.3) frame for transmission.</li>
                    </ul>
                  </ol>
                </div>

                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">OSPF layer 2</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/Layer2-OSPF.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                    </div>
                  </div>

                <div className="rounded-xl border p-4 md:col-span-2">
                  <h4 className="font-medium">Layer 1 – Physical Layer</h4>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li>Frame Transmission</li>
                    <ul className="list-[circle] pl-6">
                        <li>The switch interface GigabitEthernet0/1 sends the Ethernet frame onto the physical medium, ensuring neighboring OSPF routers receive the Hello packet</li>
                    </ul>
                  </ol>
                </div>
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">OSPF layer 1</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/Layer1-OSPF.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>
            </div>
          </Accordion>

            


              {/* DHCP Flow */}
              <Accordion id="dhcp" title="DHCP Flow (Layer 7→1) & Useful Commands on PC1" openId={open} onToggle={setOpen}>
              <div className="space-y-4">
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">PC1</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>PC1 is using the protocol DHCP to receive an IP address automatically. To generate some DHCP traffic, I will get PC1 to release its current IP address</li>
                    </ul>
              </div>

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">PC 1</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/PC1.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">PC1</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>By using the command <code>ipconfig</code> in PC1 terminal, you can check what the IP address is, and then to release the IP address, use the command <code>ipconfig /release</code></li>
                    </ul>
              </div>

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">Terminal</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/T-release.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">PC1</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>As seen in the event list, there is a new DHCP request</li>
                    </ul>
              </div>
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">DHCP</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/DHCP.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">PC1</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>renew the IP address, use the command ipcong / renew</li>
                    </ul>
              </div>
              
              <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">DHCP</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/Terminal 2.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

              <div className="divide-y divide-gray-300"></div>
                <div className="rounded-xl border p-4 md:col-span-2">
                  <h3 className="font-semibold mb-2">DHCP</h3>
                  <div>
                    <h4 className="font-medium mt-2">Layer 7 (Application), Layer 6 (Presentation), Layer 5 (Session)</h4>
                    <p className="mt-2">
                        <ul className="list-disc pl-6">
                          <li>The DHCP client constructs a <strong>DHCP Discover</strong> Discover packet (application-level message) and prepares it for transport. (In DHCP, these layers are often grouped since DHCP doesn’t use separate presentation/session functionality, but they conceptually apply here.)</li>
                        </ul>
                    </p>
                  </div>
                  <hr className="my-4 border-t border-gray-300" />

                  <div>
                    <h4 className="font-medium mt-2">Layer 4 (Transport)</h4>
                    <p className="mt-2">
                      <ul className="list-disc pl-6">
                        <li> The device encapsulates the DHCP Discover message into a <strong>UDP segment</strong> (source port 68, destination port 67).</li>
                      </ul> 
                    </p>
                  </div>
                  <hr className="my-4 border-t border-gray-300" />

                  <div>
                    <h4 className="font-medium mt-2">Layer 3 (Network)</h4>
                    <p className="mt-2">
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Interface has no IP yet</li>
                      <li>
                        The packet payload is a DHCP UDP segment. The device sets the source IP address to <code>0.0.0.0</code>
                      </li>
                      <li>
                        The destination IP address is <code>255.255.255.255</code> (broadcast). Since it’s a broadcast, the device doesn’t need to determine a next-hop router.
                      </li>
                    </ol>
                    </p>
                  </div>
                  <hr className="my-4 border-t border-gray-300" />

                  <div>
                    <h4 className="font-medium mt-2">Layer 2 (Data Link)</h4>
                    <p className="mt-2">
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>
                        Because the IP destination is a broadcast, the ARP process (conceptually) sets the destination MAC address to the broadcast MAC: <code>FF:FF:FF:FF:FF:FF</code>
                      </li>
                      <li>The device encapsulates the PDU into an Ethernet frame with the broadcast MAC as the destination.</li>
                    </ol>
                    </p>
                  </div>
                  <hr className="my-4 border-t border-gray-300" />

                  <div>
                    <h4 className="font-medium mt-2">Layer 1 (Physical)</h4>
                    <p className="mt-2">
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>The interface (FastEthernet0) is currently transmitting another frame, so the device buffers the DHCP Discover frame until the line is free.</li>
                      <li>The frame is then transmitted as electrical signals (or light/waves depending on medium).</li>
                    </ol>
                    </p>
                  </div>
                </div>
                <hr className="my-4 border-t border-gray-300" />
                
                <div className="rounded-xl border p-4 md:col-span-2">
                    <h3 className="font-semibold mb-2">DHCP</h3>
                    <div className="list-disc pl-6 space-y-1">
                      <Image
                        src="/OSI/DHCP-1.jpg"
                        alt="OSI Model Diagram"
                        width={1000}
                        height={450}
                        className="rounded mb-3"
                      />
                  </div>
              </div>

                <div className="mt-4 rounded-xl border p-4 bg-gray-50/80 dark:bg-white/5">
                  <h4 className="font-medium mb-1">Packet Tracer File</h4>
                  <p>
                    If you want to mess around with this lab yourself the <code>.pkt</code> file for Cisco Packet Tracer is linked below.
                    <br />
                    <em>Example:</em>{" "}
                      <a
                        className="text-blue-600 underline"
                        href="https://github.com/CarsonWhitfield/My-Projects/blob/main/IT%20projects/CCNA/OSI%20Model/Lab%20-%20OSI%20Model.pkt"
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
                <p>OSI Model lab notes.</p>
              </footer>
            </section>
          </div>
        </div>
      </main>
  );
}

