# Ibrahim Elhofy Portfolio

Astro-powered bilingual portfolio for business systems, AI workflows, and operational automation.

## Run locally

```powershell
cd "E:\1 - Projects\Personal\Portfolio\portfolio-site"
$env:ASTRO_TELEMETRY_DISABLED = "1"
.\node_modules\.bin\astro.cmd dev
```

Open the localhost URL printed by Astro (normally `http://localhost:4321`).

## Production build

```powershell
$env:ASTRO_TELEMETRY_DISABLED = "1"
.\node_modules\.bin\astro.cmd build
```

The static output is written to `dist/`. No site content is uploaded or deployed by these commands.
