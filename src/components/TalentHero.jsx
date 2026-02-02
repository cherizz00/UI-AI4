import React, { useEffect } from "react";
import { motion } from "framer-motion";
const MNC_LOGOS = {
    APPLE: { path: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701", viewBox: "0 0 24 24" },
    MICROSOFT: { path: "M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z", viewBox: "0 0 24 24" },
    AMAZON: { path: "M14.282 17.58c-3.155 0-5.834-1.291-7.61-3.32-.23-.263-.03-.43.19-.31 2.3 1.253 5.34 2.015 8.16 2.015 2.19 0 4.29-.444 6.13-1.28.26-.12.44.13.21.36-1.79 1.84-4.322 2.535-7.08 2.535zm8.13-2.9c-.16-.212.025-.333.193-.242.456.243.903.5 1.343.766.185.112.213.313.045.424-.467.31-.96.607-1.472.87-.22.115-.386-.062-.25-.264.24-.353.447-.735.626-1.127.18-.393.26-.774.24-1.15-.015-.267-.145-.515-.355-.675l-.37-.25z", viewBox: "0 0 24 24" },
    GOOGLE: { path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z", viewBox: "0 0 24 24" },
    NVIDIA: { path: "M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z", viewBox: "0 0 24 24" },
    META: { path: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z", viewBox: "0 0 24 24" },
    TESLA: { path: "M20.73 3.656C19.78 4.29 17.5 5.5 13.92 5.556v1.164c2.25-.056 4.305-.583 6.111-1.417L21 8.084c-2.028 1.222-4.389 1.834-7.08 1.945v13.971H10.08V10.028c-2.694-.112-5.056-.723-7.084-1.945L4.056 5.3C5.86 6.134 7.917 6.66 10.08 6.72V5.556C6.417 5.5 4.14 4.29 3.194 3.656L3.92 1.5c.389.167 3.5 1.5 8.167 1.5s7.778-1.333 8.167-1.5z", viewBox: "0 0 24 24" },
    BERKSHIRE: { path: "M4 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4H4V4zm4 6c1.1 0 2-.9 2-2s-.9-2-2-2H6v4h2zM4 12h5c2.2 0 4 1.8 4 4s-1.8 4-4 4H4v-8zm5 6c1.1 0 2-.9 2-2s-.9-2-2-2H6v4h3z", viewBox: "0 0 24 24" },
    JPMORGAN: { path: "M12 0L3.5 3.5v17L12 24l8.5-3.5v-17L12 0zm6 16.5l-6 2.5-6-2.5V7.5l6-2.5 6 2.5v9z", viewBox: "0 0 24 24" },
    VISA: { path: "M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z", viewBox: "0 0 24 24" },
    TSMC: { path: "m93.62 181.679l38.548.292h39.745c32.927-14.868 56.025-48.147 56.025-86.574c0-52.257-42.652-94.915-94.792-94.915c-52.266 0-94.944 42.656-94.944 94.915c-.003 38.218 22.734 71.336 55.418 86.282", viewBox: "0 0 256 202" },
    JNJ: { path: "M153.12 1.02588C147.849 1.02588 145.255 3.96859 145.255 7.63005C145.255 9.61442 146.094 11.604 148.312 14.005L148.349 14.0832C144.609 15.88 142.891 18.7811 142.891 21.7603C142.891 25.6925 145.906 28.979 150.568 28.979C153.239 28.979 156.37 27.8696 159.198 25.8853L161.489 28.3696H167.484V28.1769L162.599 22.7915C164.661 20.3488 165.844 17.6769 165.844 15.3436C165.844 12.4425 163.896 10.4946 160.844 10.4946C159.24 10.4946 157.443 10.953 156.26 11.4113L156.182 11.2603C159.083 9.69255 160.307 8.24463 160.307 6.21859C160.297 3.31755 157.703 1.02588 153.12 1.02588Z", viewBox: "0 0 308 30" },
    WALMART: { path: "M13.2 4.2h1.2v4.8h-1.2zm2.4 8.4l1.2-1.2 3 3-1.2 1.2zm-6 0l-3 3-1.2-1.2 3-3zm1.2 2.4h1.2v4.8h-1.2zm6 2.4l3-3 1.2 1.2-3 3zm-13.2 0l-1.2-1.2 3-3 1.2 1.2z", viewBox: "0 0 24 24" },
    SAMSUNG: { path: "M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522", viewBox: "0 0 24 24" },
    EXXON: { path: "M7.5 4.5c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5-1.5-.5-1.5-1.5.5-1.5 1.5-1.5zm9 0c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5-1.5-.5-1.5-1.5.5-1.5 1.5-1.5zm-4.5 4.5c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5-1.5-.5-1.5-1.5.5-1.5 1.5-1.5zm-4.5 4.5c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5-1.5-.5-1.5-1.5.5-1.5 1.5-1.5zm9 0c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5-1.5-.5-1.5-1.5.5-1.5 1.5-1.5z", viewBox: "0 0 24 24" },
    ASML: { path: "M40.975 93.514l.955-.956 2.865 2.864 2.865-2.864.954.956-2.864 2.863 2.864 2.867-.954.953-2.865-2.863-2.865 2.863-.955-.953 2.865-2.867-2.865-2.863zM85.958 95.121c.547-1.776 1.218-3.956 1.6-5.74h.095c.408 1.823.998 3.964 1.512 5.74.548 1.889 3.769 12.714 3.769 12.714h5.71l-7.153-22.916h-9.176c.784.417 1.575 1.335 1.075 2.726l-7.085 20.189h5.567l1.884-5.64h4.135l1.432-4.614h-4.13l.765-2.459zM109.857 94.104c-3.143-.879-4.23-1.311-4.23-2.746 0-1.301 1.188-2.304 3.943-2.304 2.463 0 4.207.711 4.871 2.384l1.617-5.646c-1.689-.74-3.875-1.481-7.301-1.481-5.311 0-9.199 2.919-9.199 6.986 0 3.482 1.65 5.572 5.521 6.669 3.945 1.113 5.375 1.58 5.375 3.451 0 1.762-1.754 2.258-3.982 2.263-1.91.004-3.863-.483-5.465-1.037l-1.285 4.489c2.191.747 4.797 1.284 7.225 1.284 6.139 0 9.354-3.211 9.354-7.057 0-3.694-1.514-5.874-6.444-7.255zM137.793 107.835s2.643-11.929 2.971-13.815c.301-1.728.508-2.939.662-4.253h.094c.154 1.314.312 2.529.627 4.253.303 1.662 2.357 13.815 2.357 13.815h5.502l-4.191-22.916h-9.736c.512.262 1.529.978 1.174 2.657-.887 3.752-2.09 8.854-2.637 11.427-.275 1.305-.48 2.24-.764 3.987h-.064c-.248-1.735-.422-2.688-.652-3.987-.412-2.315-.43-2.337-2.818-14.083H120.6c.514.262 1.533.978 1.174 2.657h.002l-4.248 20.259h5.424s2.318-12.151 2.609-13.815c.301-1.728.473-2.939.627-4.253h.094c.154 1.314.361 2.525.662 4.253.328 1.881 2.773 13.815 2.773 13.815h8.076v-.001zM158.217 103.008V84.919h-7.084c.664.341 1.344.753 1.344 2.479v20.436h14.17l1.367-4.827h-9.797v.001z", viewBox: "30 80 140 40" },
    TOYOTA: { path: "M12 3.848C5.223 3.848 0 7.298 0 12c0 4.702 5.224 8.152 12 8.152S24 16.702 24 12c0-4.702-5.223-8.152-12-8.152zm7.334 3.839c0 1.08-1.725 1.913-4.488 2.246-.26-2.58-1.005-4.279-1.963-4.913 2.948.184 6.45 1.227 6.45 2.667zM12 16.401c-.96 0-1.746-1.5-1.808-4.389.577.047 1.18.072 1.808.072.628 0 1.23-.025 1.807-.072-.061 2.89-.847 4.389-1.807 4.389zm0-6.308c-.59 0-1.155-.019-1.69-.054.261-1.728.92-3.15 1.69-3.15.77 0 1.428 1.422 1.689 3.15-.535.034-1.099.054-1.689.054zm-.882-5.075c-.956.633-1.706 2.333-1.964 4.915C6.391 9.6 4.665 8.767 4.665 7.687c0-1.44 3.504-2.49 6.453-2.669zM2.037 11.68a5.265 5.265 0 011.048-3.164c.27 1.547 2.522 2.881 5.972 3.37V12c0 3.772.879 6.203 2.087 6.97-5.107-.321-9.107-3.48-9.107-7.29zm10.823 7.29c1.207-.767 2.087-3.198 2.087-6.97v-.115c3.447-.488 5.704-1.826 5.972-3.37a5.26 5.26 0 011.049 3.165c-.004 3.81-4.008 6.969-9.109 7.29z", viewBox: "0 0 24 24" },
    UNH: { path: "M12 0L2.5 5v14l9.5 5 9.5-5V5L12 0zm7 17.5l-7 3.5-7-3.5V6.5l7-3.5 7 3.5v11z", viewBox: "0 0 24 24" },
    LVMH: { path: "M111.41,20.082V83.692C111.41,84.819,110.505,85.731,109.38,85.731H83.956c-1.125,0-2.03-0.912-2.03-2.039V20.082 c0-1.127,0.905-2.039,2.03-2.039h25.424C110.505,18.043,111.41,18.955,111.41,20.082z M45.897,20.082V83.692 C45.897,84.819,44.992,85.731,43.867,85.731H18.443c-1.125,0-2.03-0.912-2.03-2.039V20.082c0-1.127,0.905-2.039,2.03-2.039h25.424 C44.992,18.043,45.897,18.955,45.897,20.082z M177.382,18.043h-25.424c-1.125,0-2.03,0.912-2.03,2.039V83.692 c0,1.127,0.905,2.039,2.03,2.039h25.424c1.125,0,2.03-0.912,2.03-2.039V20.082C179.412,18.955,178.507,18.043,177.382,18.043z M242.067,83.692c0,1.127-0.905,2.039-2.03,2.039h-25.424c-1.125,0-2.03-0.912-2.03-2.039V20.082c0-1.127,0.905-2.039,2.03-2.039h25.424 c1.125,0,2.03,0.912,2.03,2.039V83.692z", viewBox: "0 0 250 100" },
    ARAMCO: { path: "M12 4.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.5 4.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-9 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4.5 4.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z", viewBox: "0 0 24 24" },
};


import { Calendar, Star, Zap, Globe2, Activity } from 'lucide-react';

const logos = [
    { ticker: "NVDA", market: "NASDAQ", logo: MNC_LOGOS.NVIDIA, color: "text-[#76B900]" },
    { ticker: "AAPL", market: "NASDAQ", logo: MNC_LOGOS.APPLE, color: "text-[#000000]" },
    { ticker: "MSFT", market: "NASDAQ", logo: MNC_LOGOS.MICROSOFT, color: "text-[#00A4EF]" },
    { ticker: "AMZN", market: "NASDAQ", logo: MNC_LOGOS.AMAZON, color: "text-[#FF9900]" },
    { ticker: "GOOGL", market: "NASDAQ", logo: MNC_LOGOS.GOOGLE, color: "text-[#4285F4]" },
    { ticker: "TSLA", market: "NASDAQ", logo: MNC_LOGOS.TESLA, color: "text-[#E81123]" },
    { ticker: "META", market: "NASDAQ", logo: MNC_LOGOS.META, color: "text-[#0668E1]" },
    { ticker: "ARAMCO", market: "TADAWUL", logo: MNC_LOGOS.ARAMCO, color: "text-[#00A19C]" },
    { ticker: "TSM", market: "NYSE", logo: MNC_LOGOS.TSMC, color: "text-[#E60012]" },
    { ticker: "V", market: "NYSE", logo: MNC_LOGOS.VISA, color: "text-[#1A1F71]" },
    { ticker: "JPM", market: "NYSE", logo: MNC_LOGOS.JPMORGAN, color: "text-[#117ACA]" },
    { ticker: "JNJ", market: "NYSE", logo: MNC_LOGOS.JNJ, color: "text-[#D52027]" },
    { ticker: "WMT", market: "NYSE", logo: MNC_LOGOS.WALMART, color: "text-[#0071CE]" },
    { ticker: "SAMSUNG", market: "KRX", logo: MNC_LOGOS.SAMSUNG, color: "text-[#1428A0]" },
    { ticker: "XOM", market: "NYSE", logo: MNC_LOGOS.EXXON, color: "text-[#EE3124]" },
    { ticker: "ASML", market: "Euronext", logo: MNC_LOGOS.ASML, color: "text-[#255398]" },
    { ticker: "TM", market: "NYSE", logo: MNC_LOGOS.TOYOTA, color: "text-[#EB0A1E]" },
    { ticker: "UNH", market: "NYSE", logo: MNC_LOGOS.UNH, color: "text-[#1F4394]" },
    { ticker: "BRK.B", market: "NYSE", logo: MNC_LOGOS.BERKSHIRE, color: "text-[#212121]" },
    { ticker: "LVMH", market: "Euronext", logo: MNC_LOGOS.LVMH, color: "text-[#CFB53B]" }
];

const dataPoints = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    val: (Math.random() * 1000).toFixed(4),
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 10
}));

const TypingWord = () => {
    const words = ["Market", "Noise", "Algos", "Vols", "Sentiment"];
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);

    // typeWriter effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1500);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 50 : 100, Math.random() * 150));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="relative inline-block min-w-[3ch] md:min-w-[4ch] text-brand-orange">
            {words[index].substring(0, subIndex)}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[0.8em] bg-brand-orange ml-1 align-middle"
            />
        </span>
    );
};

const TalentHero = () => {
    return (
        <section className="relative min-h-[70vh] lg:min-h-[90vh] bg-transparent text-black pt-20 md:pt-32 lg:pt-40 pb-8 overflow-hidden flex flex-col items-center justify-start text-center">

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
                {dataPoints.map(p => (
                    <div
                        key={p.id}
                        className="data-float text-black"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    >
                        0x{p.val}
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-100 mb-8 md:mb-10 shadow-premium"
                >
                    <Activity size={12} className="text-brand-orange" />
                    <span className="badge-institutional text-slate-500">Real-time Alpha Node Active</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1 }}
                    className="mb-6 md:mb-10"
                >
                    <h1 className="text-fluid-h1 max-w-4xl mx-auto italic">
                        Beat the <TypingWord />
                        <br />
                        <span className="not-italic bg-gradient-to-r from-slate-900 via-slate-800 to-brand-orange bg-clip-text text-transparent underline decoration-brand-orange/50 underline-offset-8">
                            Before the Bell.
                        </span>
                    </h1>
                </motion.div>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-fluid-p text-slate-700 mb-10 md:mb-16 max-w-3xl mx-auto font-serif text-[13px] md:text-[22px] leading-relaxed italic px-4"
                >
                    Get the unfair advantage with <strong className="not-italic font-jakarta text-slate-900 border-b border-brand-orange/30 px-1">AI4INVEST Daily</strong>.
                    <br className="hidden md:block" />
                    <span className="opacity-80">Institutional-grade pre-market intelligence reports delivered to your inbox every morning at 8:00 AM IST.</span>
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16 md:mb-32 w-full max-w-md mx-auto"
                >
                    <form className="relative w-full flex items-center" onSubmit={(e) => e.preventDefault()}>
                        <div className="absolute left-4 text-slate-400">
                            <Calendar size={18} />
                        </div>
                        <input
                            type="email"
                            placeholder="user@fund.com"
                            className="w-full pl-10 pr-24 md:pl-12 md:pr-32 py-3 md:py-4 rounded-xl md:rounded-2xl glass-100 border border-white/20 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-orange/50 transition-all font-medium text-xs md:text-sm shadow-premium"
                        />
                        <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 md:px-6 rounded-lg md:rounded-xl bg-black text-white text-[10px] md:text-xs font-bold hover:bg-slate-900 active:scale-95 transition-all tracking-wide flex items-center gap-2">
                            SUBSCRIBE
                        </button>
                    </form>
                    <p className="mt-4 text-[11px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Next Brief: 08:00 AM IST
                    </p>
                </motion.div>



            </div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="container border-t border-black/5 pt-8 md:pt-14 pb-4 md:pb-10 relative px-0"
            >
                <p className="text-center text-slate-500 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-8 md:mb-12">
                    Trusted by technologists working at the world’s most advanced companies
                </p>
                <div className="flex flex-col gap-4 md:gap-8">
                    {/* First Line: Left to Right */}
                    <div
                        className="w-full overflow-hidden flex items-center"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                        }}
                    >
                        <div className="animate-marquee flex items-center gap-16 md:gap-32">
                            {[...logos, ...logos].map((logo, idx) => (
                                <div key={idx} className="flex items-center justify-center shrink-0 group/logo cursor-default">
                                    <div className="h-5 md:h-7 w-auto flex items-center justify-center transition-all duration-500 hover:scale-110">
                                        <svg
                                            viewBox={logo.logo.viewBox}
                                            className="h-full w-auto fill-current text-slate-400/50 group-hover/logo:text-inherit transition-colors duration-500"
                                            style={{
                                                color: logo.color.includes('#') ? logo.color.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/)?.[0] : undefined,
                                                maxWidth: '100px'
                                            }}
                                        >
                                            <path d={logo.logo.path} />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Line: Right to Left (Reverse) */}
                    <div
                        className="w-full overflow-hidden flex items-center"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                        }}
                    >
                        <div className="animate-marquee-reverse flex items-center gap-16 md:gap-32" style={{ transform: 'translate3d(0,0,0)' }}>
                            {[...logos, ...logos].reverse().map((logo, idx) => (
                                <div key={idx} className="flex items-center justify-center shrink-0 group/logo cursor-default">
                                    <div className="h-5 md:h-7 w-auto flex items-center justify-center transition-all duration-500 hover:scale-110">
                                        <svg
                                            viewBox={logo.logo.viewBox}
                                            className="h-full w-auto fill-current text-slate-400/50 group-hover/logo:text-inherit transition-colors duration-500"
                                            style={{
                                                color: logo.color.includes('#') ? logo.color.match(/#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}/)?.[0] : undefined,
                                                maxWidth: '100px'
                                            }}
                                        >
                                            <path d={logo.logo.path} />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default TalentHero;
