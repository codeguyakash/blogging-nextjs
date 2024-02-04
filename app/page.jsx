// "use client";
import Image from "next/image";
import ImagePath from "../public/assets/images/image.jpg";

export default function Home() {
  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-3xl my-5 border-b py-5">All article</h1>
      <span className="text-2xl my-2">
        Demystifying DNS: A Beginner's Guide to How the Internet Finds Its Way
      </span>
      <Image
        src={ImagePath}
        width={1200}
        height={500}
        alt="Picture of the author"
        className="m-auto"
      />
      <br />
      <p>
        <span>Introduction:</span>
        Ever wondered how, when you type a website address into your browser, it
        magically takes you to the right place on the internet? That's the work
        of DNS or Domain Name System, a behind-the-scenes hero of the internet.
        In this article, we'll unravel the mystery of DNS, breaking down its
        functions and importance in a way that's easy for anyone to understand.
        <br />
        <br />
        <span>1. What is DNS?</span>
        Imagine the internet as a massive city with millions of buildings, each
        having its unique address. In this analogy, DNS is like a friendly guide
        that translates the names of these buildings (websites) into their
        numerical addresses (IP addresses) that computers use to communicate.
        <br />
        <br />
        <span>2. The Basics of DNS:</span>
        Domain Names: A domain name is the human-readable address of a website,
        like www.codeguyakash.me This is what you type into your browser's
        address bar.
        <br />
        IP Addresses: Every device connected to the internet has a unique
        numerical address called an IP address. It's like the phone number of
        the internet.
        <br />
        <br />
        <span>3. How DNS Works:</span>
        When you enter a domain name in your browser, here's what happens behind
        the scenes:
        <br />
        <br />
        <span className="sub-heading">Step : 1</span>Your Computer Checks Local
        Cache: Your computer first checks its local DNS cache to see if it
        already knows the IP address for the requested domain. If it does, the
        process ends here.
        <br />
        <span className="sub-heading">Step : 2</span>Contacting the Recursive
        DNS Server: If the address isn't in the local cache, your computer
        contacts a Recursive DNS Server. This server is like the expert guide
        who knows the entire map of the internet.
        <br />
        <span className="sub-heading">Step : 3</span>Recursive DNS Server
        Queries Root DNS Servers: If the Recursive DNS Server doesn't have the
        information, it contacts the Root DNS Servers. These servers are like
        the city's main information center, directing traffic to the right
        neighborhoods.
        <br />
        <span className="sub-heading">Step : 4</span>Querying TLD and
        Authoritative DNS Servers: The Recursive DNS Server then contacts the
        Top-Level Domain (TLD) servers (like .com, .org) for more specific
        directions. Finally, it reaches out to the Authoritative DNS Servers,
        which hold the exact address for the requested domain.
        <br />
        <span className="sub-heading">Step : 5</span>Returning the IP Address:
        Once the Authoritative DNS Server provides the IP address, the Recursive
        DNS Server stores it in its cache and sends it back to your computer.
        <br />
        <span className="sub-heading">Step : 6</span>Your Computer Connects to
        the Website: Armed with the IP address, your computer can connect to the
        website's server directly, and you find yourself on the desired webpage.
        <br />
        <br />
        <span>4. DNS Propagation:</span> DNS propagation occurs when changes are
        made to a domain (like switching hosting providers). This is the time it
        takes for the updated information to spread across all DNS servers
        worldwide.
        <br />
        <br />
        <span>5. Importance of DNS:</span> User-Friendly Internet: DNS makes the
        internet user-friendly by allowing us to use easily remembered domain
        names instead of dealing with complicated IP addresses.
        <br />
        Load Balancing: DNS can distribute incoming network traffic across
        multiple servers, ensuring websites remain accessible even during
        high-traffic periods.
        <br />
        Redundancy and Reliability: Multiple DNS servers worldwide provide
        redundancy, ensuring that the internet remains functional even if some
        servers fail.
        <br />
        <br />
        <span>Conclusion:</span> In essence, DNS is the unsung hero that makes
        internet navigation seamless for users. Understanding its basic
        functions helps us appreciate the intricate web of technology that
        brings our favorite websites to our fingertips. So, the next time you
        visit a website, remember that a small army of DNS servers is working
        tirelessly to ensure you reach your digital destination without a hitch.
        Happy browsing!
      </p>
    </div>
  );
}
