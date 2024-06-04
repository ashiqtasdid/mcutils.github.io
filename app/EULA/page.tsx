import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import Link from "next/link";
import React from "react";

const EULA = () => {
  return (
    <div>
        <Nav/>
      <div className=" text-black dark:text-white prose mx-auto sm:mx-2 py-32 ">
        <h2 className="text-black dark:text-white">
          End-User License Agreement (EULA) for Minecraft Utilities Discord Bot
        </h2>

        <p>
          This End-User License Agreement (&quot;EULA&quot;) is a legal
          agreement between you (&quot;you&quot; or &quot;End-User&quot;) and
          the developers of the Minecraft Utilities Discord Bot (&quot;we&quot;
          or &quot;us&quot;). This EULA governs your use of the Minecraft
          Utilities Discord Bot (&quot;Software&quot;).
        </p>

        <h3 className="text-black dark:text-white">1. Grant of License</h3>

        <p>
          We grant you a non-exclusive, non-transferable license to use the
          Software on a single Discord server owned and operated by you. You may
          not modify, disassemble, decompile, reverse engineer, or create
          derivative works of the Software.
        </p>

        <h3 className="text-black dark:text-white">2. Open Source</h3>

        <p>
          The Minecraft Utilities Discord Bot is an open-source project. The
          source code is available for your review and modification <Link href={'https://github.com/ashiqtasdid/minecraft-utilities'} target="_blank">Github Repo</Link>. You are free to modify the source code for your own
          personal use, but you may not distribute modified versions of the
          Software without our express written permission.
        </p>

        <h3 className="text-black dark:text-white">3. Disclaimer of Warranty</h3>

        <p>
          The Software is provided &quot;as is&quot; and without warranty of any
          kind, express or implied. We disclaim all warranties, including but
          not limited to the warranties of merchantability, fitness for a
          particular purpose, and non-infringement. You assume all risks
          associated with the use of the Software.
        </p>

        <h3 className="text-black dark:text-white">4. Limitation of Liability</h3>

        <p>
          We shall not be liable for any damages arising out of your use of the
          Software, including but not limited to direct, indirect, incidental,
          special, consequential, or punitive damages.
        </p>

        <h3 className="text-black dark:text-white">5. Term and Termination</h3>

        <p>
          This EULA shall be effective upon your first use of the Software and
          shall remain in effect until terminated by you or us. We may terminate
          this EULA at any time for any reason, with or without notice. You may
          terminate this EULA by ceasing to use the Software.
        </p>

        <h3 className="text-black dark:text-white">6. Governing Law</h3>

        <p>
          This EULA shall be governed by and construed in accordance with the
          laws of United Kingdom.
        </p>

        <h3 className="text-black dark:text-white">7. Entire Agreement</h3>

        <p>
          This EULA constitutes the entire agreement between you and us
          regarding your use of the Software and supersedes all prior or
          contemporaneous communications and proposals, whether oral or written.
        </p>

        <h3 className="text-black dark:text-white">8. Severability</h3>

        <p>
          If any provision of this EULA is held to be invalid or unenforceable,
          such provision shall be struck and the remaining provisions shall
          remain in full force and effect.
        </p>

        <h3 className="text-black dark:text-white">9. Waiver</h3>

        <p>
          Our failure to enforce any provision of this EULA shall not be
          construed as a waiver of such provision or of the right to enforce
          such provision at any subsequent time.
        </p>

        <h3 className="text-black dark:text-white">10. Contact Us</h3>

        <p>
          If you have any questions about this EULA, please contact us at <Link href={'/faq'}>here</Link>
        </p>

        <p className="text-center font-bold mt-4">
          <b>
            BY USING THE SOFTWARE, YOU AGREE TO ALL OF THE TERMS AND CONDITIONS
            OF THIS EULA.
          </b>
        </p>
      </div>
      <hr />
      <FooterMain/>
    </div>
  );
};

export default EULA;
