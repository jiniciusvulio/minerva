const primaryColors = [
  { name: "Primary 500", hex: "#0d5d4f", accent: "#0d5d4f" },
  { name: "Primary 400", hex: "#1d7a67", accent: "#1d7a67" },
  { name: "Primary 300", hex: "#7db4a7", accent: "#7db4a7" },
  { name: "Primary 200", hex: "#c2ddd4", accent: "#c2ddd4" },
  { name: "Primary 100", hex: "#dfeae5", accent: "#dfeae5" },
];

const neutralColors = [
  { name: "Neutral 900", hex: "#1b2b2a", accent: "#1b2b2a" },
  { name: "Neutral 500", hex: "#334a49", accent: "#334a49" },
  { name: "Neutral 700", hex: "#4e5e5a", accent: "#4e5e5a" },
  { name: "Neutral 300", hex: "#d0d0d0", accent: "#d0d0d0" },
  { name: "Neutral 200", hex: "#e6e6e3", accent: "#e6e6e3" },
  { name: "Neutral 100", hex: "#f4f4f3", accent: "#f4f4f3" },
  { name: "Neutral 50", hex: "#f7f7f3", accent: "#f7f7f3" },
  { name: "White", hex: "#ffffff", accent: "#ffffff" },
];

const typeScale = [
  { style: "Display 1", font: "Playfair Display", size: "48 / 56", weight: "Bold", usage: "Page titles" },
  { style: "Display 2", font: "Playfair Display", size: "36 / 44", weight: "Bold", usage: "Section titles" },
  { style: "Heading 1", font: "Inter", size: "28 / 36", weight: "Semi Bold", usage: "Card titles" },
  { style: "Heading 2", font: "Inter", size: "22 / 30", weight: "Semi Bold", usage: "Sub section titles" },
  { style: "Heading 3", font: "Inter", size: "18 / 24", weight: "Medium", usage: "Small titles" },
  { style: "Body Large", font: "Inter", size: "16 / 24", weight: "Regular", usage: "Body copy" },
  { style: "Body", font: "Inter", size: "14 / 20", weight: "Regular", usage: "Supporting text" },
  { style: "Small", font: "Inter", size: "12 / 16", weight: "Regular", usage: "Captions, meta" },
];

const spacingScale = [
  { step: 4, size: "4px", label: "4" },
  { step: 8, size: "8px", label: "8" },
  { step: 12, size: "12px", label: "12" },
  { step: 16, size: "16px", label: "16" },
  { step: 24, size: "24px", label: "24" },
  { step: 32, size: "32px", label: "32" },
  { step: 40, size: "40px", label: "40" },
  { step: 48, size: "48px", label: "48" },
  { step: 64, size: "64px", label: "64" },
];

const radiusValues = [
  { label: "4px", value: 4 },
  { label: "8px", value: 8 },
  { label: "12px", value: 12 },
  { label: "16px", value: 16 },
  { label: "24px", value: 24 },
  { label: "Full", value: 9999 },
];

const shadows = [
  { label: "Sm", css: "0 4px 10px rgba(0,0,0,0.08)" },
  { label: "Md", css: "0 4px 20px rgba(0,0,0,0.12)" },
  { label: "Lg", css: "0 12px 28px rgba(0,0,0,0.12)" },
  { label: "Xl", css: "0 20px 40px rgba(0,0,0,0.12)" },
];

const outlineIcons = ["◔", "⌕", "⧉", "◷", "↓", "☺", "▶", "↗", "⌂", "⋯"];
const filledIcons = ["⚡", "↗", "◎", "★", "✓", "!", "•"];

const buttonStates = {
  primary: [
    { label: "Default", className: "bg-[#0f6c5c] text-white border-[#0f6c5c]" },
    { label: "Hover", className: "bg-[#0d5d4f] text-white border-[#0d5d4f]" },
    { label: "Disabled", className: "bg-[#d5dfd9] text-[#7d8f8b] border-[#d5dfd9]" },
  ],
  secondary: [
    { label: "Default", className: "bg-transparent text-[#0f6c5c] border-[#79a99b]" },
    { label: "Hover", className: "bg-[#edf4f1] text-[#0f6c5c] border-[#79a99b]" },
    { label: "Disabled", className: "bg-transparent text-[#7d8f8b] border-[#d5dfd9]" },
  ],
  tertiary: [
    { label: "Default", className: "bg-transparent text-[#0f6c5c] border-transparent" },
    { label: "Hover", className: "bg-[#edf4f1] text-[#0f6c5c] border-transparent" },
    { label: "Disabled", className: "bg-transparent text-[#7d8f8b] border-transparent" },
  ],
};

const statusLabels = ["In Progress", "Completed", "Now Playing", "Blocked"];

function MinervaMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-label="Minerva logo" className="h-8 w-8">
      <path d="M5 23.5V9.5C5 7.567 6.567 6 8.5 6H12.5C14.433 6 16 7.567 16 9.5V13.5L23.5 6H25.5C27.433 6 29 7.567 29 9.5V23.5C29 25.433 27.433 27 25.5 27H23.5C21.567 27 20 25.433 20 23.5V18.5L12.5 26H8.5C6.567 26 5 24.433 5 22.5V23.5Z" fill="#0F6C5C" fillOpacity="0.15"/>
      <path d="M2.5 22.5V8.5C2.5 6.567 4.067 5 6 5H9.5C11.433 5 13 6.567 13 8.5V13.5L18.5 8.5H20.5C22.433 8.5 24 10.067 24 12V22.5C24 24.433 22.433 26 20.5 26H18.5C16.567 26 15 24.433 15 22.5V17.5L9.5 23.5H6C4.067 23.5 2.5 21.933 2.5 20V22.5Z" fill="#0F6C5C"/>
      <path d="M13 15.5V22.5C13 23.319 12.356 24 11.5 24H8.5C7.644 24 7 23.319 7 22.5V15.5C7 14.681 7.644 14 8.5 14H11.5C12.356 14 13 14.681 13 15.5Z" fill="#F5F5F3"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0efee] px-6 py-8 text-[#1f2d2a]">
      <div className="mx-auto max-w-[1220px] rounded-[8px] border border-[#d6d6d3] bg-[#f7f7f5] p-7 shadow-[0_8px_20px_rgba(34,42,39,0.04)]">
        <header className="mb-8 flex items-start justify-between gap-10 border-b border-[#d8d8d4] pb-5">
          <div className="flex items-center gap-3 pt-1">
            <MinervaMark />
            <div className="text-[2.1rem] font-medium tracking-[-0.06em] text-[#1d302d]">minerva</div>
          </div>
          <div className="mt-3 flex min-w-[420px] items-center justify-end gap-3 text-[0.7rem] uppercase tracking-[0.26em] text-[#455d5a]">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0f6c5c] align-middle" />
            <span>Colors</span>
          </div>
        </header>

        <div className="grid grid-cols-[1.1fr_2.2fr] gap-10 pb-4">
          <div className="pt-1">
            <h1 className="font-[Georgia,serif] text-[4rem] leading-[0.9] tracking-[-0.06em] text-[#1e2a2b]">Design System</h1>
            <p className="mt-5 max-w-[340px] text-[1.05rem] leading-[1.6] text-[#566d69]">
              A unified design language for Minerva learning platform. Clean, modern and focused on clarity,
              consistency and intuitive learning experiences.
            </p>
            <div className="mt-7 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-[#3e5955]">
              <span>Version 1.0.1</span>
              <span className="text-[#5b6d6a]">•</span>
              <span>May 2025</span>
            </div>
          </div>

          <section className="pt-2">
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#3d534f]">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#0f6c5c]" />
              <span>Primary</span>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {primaryColors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className="h-20 rounded-[6px] border border-[#dbe2df]" style={{ background: color.hex }} />
                  <div className="text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[#2d4d4a]">{color.name}</div>
                  <div className="text-[0.7rem] text-[#566d69]">{color.hex.toUpperCase()}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-5 gap-3">
              {neutralColors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className="h-20 rounded-[6px] border border-[#dbe2df]" style={{ background: color.hex }} />
                  <div className="text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[#2d4d4a]">{color.name}</div>
                  <div className="text-[0.7rem] text-[#566d69]">{color.hex.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 grid grid-cols-[1.15fr_2fr] gap-8 border-t border-[#d7d6d2] pt-8">
          <section className="min-w-0">
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#3d534f]">
              <span className="mr-1">02</span>
              <span>Typography</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-baseline gap-5">
                <div className="font-[Georgia,serif] text-[4.4rem] leading-none tracking-[-0.08em] text-[#1e2a2b]">Ag</div>
                <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#55706d]">Elegant • Readable • Timeless</div>
              </div>
              <div className="flex items-baseline gap-5">
                <div className="font-[Georgia,serif] text-[4.4rem] leading-none tracking-[-0.08em] text-[#1e2a2b] italic">Ag</div>
                <div className="text-[0.78rem] uppercase tracking-[0.18em] text-[#55706d]">Clean • Modern • Highly legible</div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#3d534f]">
              <span className="mr-1">03</span>
              <span>Type Scale</span>
            </div>
            <div className="overflow-hidden rounded-[8px] border border-[#d7d6d2] bg-[#f7f7f5]">
              <div className="grid grid-cols-[1.1fr_0.9fr_0.8fr_0.9fr] gap-3 border-b border-[#d7d6d2] px-4 py-3 text-[0.7rem] uppercase tracking-[0.14em] text-[#56706d]">
                <span>Style</span>
                <span>Font</span>
                <span>Size / Line Height</span>
                <span>Weight</span>
                <span>Usage</span>
              </div>
              {typeScale.map((item) => (
                <div key={item.style} className="grid grid-cols-[1.1fr_0.9fr_0.8fr_0.9fr] gap-3 border-b border-[#eceae7] px-4 py-3 last:border-b-0">
                  <div className="font-medium text-[#1d2b2a]">{item.style}</div>
                  <div className="text-[#4f625f]">{item.font}</div>
                  <div className="text-[#4f625f]">{item.size}</div>
                  <div className="text-[#4f625f]">{item.weight}</div>
                  <div className="text-[#4f625f]">{item.usage}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 grid grid-cols-[1.3fr_2fr] gap-8 border-t border-[#d7d6d2] pt-8">
          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">04</span>
              <span>Spacing System</span>
            </div>
            <div className="flex items-end gap-2">
              {spacingScale.map((space) => (
                <div key={space.label} className="flex flex-col items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#c7d6d0] bg-[#dfeae2] text-[0.65rem] text-[#22463f]">
                    {space.label}
                  </div>
                  <div className="text-[0.63rem] text-[#67827d]">{space.size}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">05</span>
              <span>Radius &amp; Shadows</span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-3">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[#4b635f]">Radius</div>
                <div className="flex items-end gap-3">
                  {radiusValues.map((radius) => (
                    <div key={radius.label} className="flex flex-col items-center gap-2">
                      <div className="h-8 w-8 border border-[#cfd6d4] bg-[#edf3f0]" style={{ borderRadius: `${radius.value}px` }} />
                      <span className="text-[0.62rem] text-[#5d7a76]">{radius.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[#4b635f]">Shadows</div>
                <div className="grid grid-cols-2 gap-2">
                  {shadows.map((shadow) => (
                    <div key={shadow.label} className="flex h-16 flex-col items-center justify-center rounded-[8px] border border-[#d9d9d4] bg-white text-center">
                      <div className="h-8 w-16 rounded-[4px] bg-[#f5f5f2]" style={{ boxShadow: shadow.css }} />
                      <span className="mt-2 text-[0.62rem] text-[#5d7a76]">{shadow.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 grid grid-cols-[1.1fr_2.1fr] gap-8 border-t border-[#d7d6d2] pt-8">
          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">06</span>
              <span>Icons</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-[#4d625f]">Outline Style</div>
                <div className="grid grid-cols-5 gap-3">
                  {outlineIcons.map((icon) => (
                    <div key={icon} className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#d9d9d4] bg-white text-lg text-[#1b2a2a]">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-[#4d625f]">Filled Style</div>
                <div className="grid grid-cols-5 gap-3">
                  {filledIcons.map((icon) => (
                    <div key={icon} className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#f1f1ef] text-lg text-[#1b2a2a]">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-2 text-[0.7rem] text-[#56706d]">
              <div className="font-medium uppercase tracking-[0.14em] text-[#466660]">Icon Specs</div>
              <ul className="space-y-1 leading-relaxed">
                <li>• 24x24px grid</li>
                <li>• Stroke width 1.5px</li>
                <li>• Rounded line caps</li>
                <li>• Consistent optical balance</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">07</span>
              <span>Buttons</span>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {Object.entries(buttonStates).map(([group, variants]) => (
                <div key={group} className="space-y-3">
                  {variants.map((variant) => (
                    <button
                      key={variant.label}
                      className={`flex h-10 items-center justify-center rounded-[8px] border px-4 text-[0.74rem] font-medium uppercase tracking-[0.08em] ${variant.className} ${variant.label === "Default" ? "shadow-[0_1px_0_rgba(7,24,19,0.04)]" : ""} ${variant.label === "Disabled" ? "cursor-not-allowed opacity-80" : ""}`}
                      type="button"
                    >
                      {group === "primary" ? "Primary" : group === "secondary" ? "Secondary" : "Tertiary"}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-6 text-[0.7rem] text-[#56706d]">
              <span>Button Specs</span>
              <span>• Height: 44px</span>
              <span>• Padding: 16px</span>
              <span>• Radius: 12px</span>
            </div>
          </section>
        </div>

        <div className="mt-8 grid grid-cols-[1.1fr_2.1fr] gap-8 border-t border-[#d7d6d2] pt-8">
          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">08</span>
              <span>Inputs</span>
            </div>
            <div className="space-y-4">
              <div className="flex h-11 items-center rounded-[8px] border border-[#d4d8d5] bg-white px-4 text-[0.82rem] text-[#667a77] shadow-[0_0_0_1px_rgba(17,27,24,0.02)]">
                Search anything...
              </div>
              <div className="flex h-11 items-center rounded-[8px] border border-[#d4d8d5] bg-white px-4 text-[0.82rem] text-[#465f5b]">
                Select
              </div>
              <div className="flex h-11 items-center rounded-[8px] border border-[#d4d8d5] bg-[#f7f7f5] px-4 text-[0.82rem] text-[#465f5b]">
                Most Relevant
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">09</span>
              <span>Badges / Tags</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Video", tone: "bg-[#edf4f1] text-[#0d5d4f]" },
                { label: "Lesson", tone: "bg-[#edf4f1] text-[#0d5d4f]" },
                { label: "Popular", tone: "bg-[#0d5d4f] text-white" },
              ].map((badge) => (
                <div key={badge.label} className={`flex h-8 items-center justify-center rounded-[5px] px-3 text-[0.64rem] font-medium uppercase tracking-[0.12em] ${badge.tone}`}>
                  {badge.label}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 grid grid-cols-[1.05fr_2.1fr_1.1fr] gap-8 border-t border-[#d7d6d2] pt-8">
          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">10</span>
              <span>Status / Indicators</span>
            </div>
            <div className="space-y-3">
              {statusLabels.map((label, index) => (
                <div key={label} className="flex items-center gap-2 text-[0.72rem] text-[#44615d]">
                  <span className={`inline-block h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-[#0f6c5c]" : index === 1 ? "bg-[#0f6c5c]" : index === 2 ? "bg-[#d8e5df]" : "bg-[#7d8f8b]"}`} />
                  {label}
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#3d534f]">
              <span className="mr-1">11</span>
              <span>Progress Bar</span>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#dfeae2]">
                <div className="h-full w-[35%] rounded-full bg-[#0f6c5c]" />
              </div>
              <span className="text-[0.7rem] text-[#466761]">35% complete</span>
            </div>
          </section>

          <section />
        </div>

        <div className="mt-8 grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 border-t border-[#d7d6d2] pt-8">
          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Course Card</div>
            <div className="rounded-[10px] border border-[#d6d6d3] bg-[#f3f3f1] p-4 shadow-[0_1px_0_rgba(10,18,16,0.04)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#0f6c5c] text-lg font-semibold text-white">N</div>
              <div className="text-[1.08rem] font-semibold text-[#1d2f2f]">Next.js for Production</div>
              <p className="mt-2 text-[0.7rem] leading-5 text-[#4f625f]">Build scalable, high-performance web applications with Next.js.</p>
              <div className="mt-4 flex gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-[#59736f]">
                <span className="rounded-full bg-[#edf4f1] px-2 py-1">Intermediate</span>
                <span>8h 24m</span>
                <span>12 modules</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Lesson Card</div>
            <div className="rounded-[10px] border border-[#d6d6d3] bg-[#f3f3f1] p-4 shadow-[0_1px_0_rgba(10,18,16,0.04)]">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-[4px] bg-[#edf4f1] px-2 py-1 text-[0.64rem] font-medium uppercase tracking-[0.12em] text-[#0d5d4f]">Video</span>
                <span className="text-[0.64rem] uppercase tracking-[0.12em] text-[#5c7a75]">2:45m</span>
              </div>
              <div className="text-[1.1rem] font-semibold leading-6 text-[#1d2f2f]">Data Fetching in Server Components</div>
              <p className="mt-2 text-[0.72rem] leading-5 text-[#4f625f]">Learn how to fetch data on the server using async and wait and Next.js best practices.</p>
              <div className="mt-4 text-[0.7rem] uppercase tracking-[0.12em] text-[#4c6a65]">Lesson 5.1 • 2:45m</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Lesson Card</div>
            <div className="rounded-[10px] border border-[#d6d6d3] bg-[#f3f3f1] p-4 shadow-[0_1px_0_rgba(10,18,16,0.04)]">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-[4px] bg-[#edf4f1] px-2 py-1 text-[0.64rem] font-medium uppercase tracking-[0.12em] text-[#0d5d4f]">Lesson</span>
                <span className="text-[0.64rem] uppercase tracking-[0.12em] text-[#5c7a75]">Watch</span>
              </div>
              <div className="text-[1.1rem] font-semibold leading-6 text-[#1d2f2f]">Data Fetching &amp; Caching</div>
              <p className="mt-2 text-[0.72rem] leading-5 text-[#4f625f]">Explore different data fetching methods and learn how to cache and revalidate data effectively.</p>
              <div className="mt-4 text-[0.7rem] uppercase tracking-[0.12em] text-[#4c6a65]">Module 5 • View lesson</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Resource Card</div>
            <div className="rounded-[10px] border border-[#d6d6d3] bg-[#f3f3f1] p-4 shadow-[0_1px_0_rgba(10,18,16,0.04)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#d1ddd8] bg-white text-[#0d5d4f]">⌂</div>
                <span className="rounded-[4px] bg-[#edf4f1] px-2 py-1 text-[0.62rem] uppercase tracking-[0.12em] text-[#0d5d4f]">PDF</span>
              </div>
              <div className="text-[1rem] font-semibold leading-5 text-[#1d2f2f]">Caching and Revalidation Guide</div>
              <p className="mt-2 text-[0.68rem] leading-5 text-[#4f625f]">Deep dive into Next.js caching strategies and revalidation best practices.</p>
              <div className="mt-4 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.12em] text-[#4c6a65]">
                <span>1.2 MB</span>
                <span>↓</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[1.3fr_1.5fr_1.1fr] gap-6 border-t border-[#d7d6d2] pt-8">
          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Navigation</div>
            <div className="flex items-center gap-3 rounded-[8px] border border-[#d9d9d4] bg-[#f6f6f3] p-3 text-[0.8rem] text-[#2f4340]">
              <MinervaMark />
              <span className="font-medium">minerva</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Breadcrumbs</div>
            <div className="flex items-center gap-2 text-[0.75rem] text-[#526d6a]">
              <span>All Courses</span>
              <span>›</span>
              <span>Next.js for Production</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#465e5b]">Pagination</div>
            <div className="flex items-center gap-2 text-[0.7rem] text-[#556e6b]">
              <button type="button" className="h-8 w-8 rounded-[6px] border border-[#d5d9d7] bg-white">‹</button>
              <button type="button" className="h-8 w-8 rounded-[6px] bg-[#0f6c5c] text-white">1</button>
              <button type="button" className="h-8 w-8 rounded-[6px] border border-[#d5d9d7] bg-white">2</button>
              <button type="button" className="h-8 w-8 rounded-[6px] border border-[#d5d9d7] bg-white">3</button>
              <button type="button" className="h-8 w-8 rounded-[6px] border border-[#d5d9d7] bg-white">...</button>
              <button type="button" className="h-8 w-8 rounded-[6px] border border-[#d5d9d7] bg-white">›</button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4 border-t border-[#d7d6d2] pt-8">
          {[
            { title: "Clarify Fit", body: "Every element should be clear, consistent and immediately comprehensible." },
            { title: "Consistency", body: "Use components and patterns that reinforce a cohesive product experience." },
            { title: "Focus & Calm", body: "Remove noise and give learners space to focus on what matters most." },
            { title: "Accessible", body: "Design with accessibility and clarity in mind from the start." },
          ].map((principle) => (
            <div key={principle.title} className="flex gap-3 rounded-[10px] border border-[#d9d9d4] bg-[#f6f6f3] p-3">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#cfd8d5] bg-white text-[#0f6c5c]">✦</div>
              <div>
                <div className="text-[0.78rem] font-semibold text-[#1d2c2f]">{principle.title}</div>
                <p className="mt-1 text-[0.68rem] leading-5 text-[#516c69]">{principle.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
