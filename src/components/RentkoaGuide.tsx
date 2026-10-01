import { Download, Maximize2 } from 'lucide-react';
import type { Lang } from '../types';
import { rentkoaFeatures, rentkoaNotes } from '../data/rentkoaGuide';
import { asset } from '../lib/asset';

export default function RentkoaGuide({ lang }: { lang: Lang }) {
  const copy = rentkoaNotes[lang];
  return (
    <div className="product-guide">
      <div className="guide-introduction">
        <h2>{copy.title}</h2>
        <p>{copy.intro}</p>
        <ol className="guide-flow" aria-label={copy.workflow}>
          {copy.flow.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <a className="text-link guide-download" href={asset('/docs/rentkoa-capabilities.md')} download>
          <Download size={15} /> {copy.download}
        </a>
        <a className="text-link guide-download" href={asset('/docs/rentkoa-guide.zip')} download>
          <Download size={15} /> {copy.bundle}
        </a>
      </div>
      <p className="guide-provenance">{copy.images}</p>
      {(['workflow', 'studio'] as const).map((group) => (
        <section key={group} className="guide-group" aria-labelledby={`guide-${group}`}>
          <h2 id={`guide-${group}`}>{copy[group]}</h2>
          {rentkoaFeatures.filter((feature) => feature.group === group).map((feature, index) => (
            <section key={feature.id} className="guide-feature" aria-labelledby={`guide-${feature.id}`}>
              <div className="guide-feature-copy">
                <div>
                  <h3 id={`guide-${feature.id}`}>
                    {group === 'workflow' && <span className="guide-step">{index + 1}.</span>}
                    {feature.title[lang]}
                  </h3>
                  <p>{feature.body[lang]}</p>
                </div>
                <p className="guide-image-note">{feature.readImage[lang]}</p>
              </div>
              <figure>
                <a href={asset(feature.image)} target="_blank" rel="noopener noreferrer" aria-label={`${feature.title[lang]} · ${copy.zoom}`}>
                  <img src={asset(feature.image)} alt={feature.readImage[lang]} loading="lazy" width={1120} height={feature.source === 'example' ? 840 : 760} />
                </a>
                <figcaption>
                  <span>{copy[feature.source]}</span>
                  <a href={asset(feature.image)} target="_blank" rel="noopener noreferrer"><Maximize2 size={12} /> {copy.zoom}</a>
                </figcaption>
              </figure>
            </section>
          ))}
        </section>
      ))}
      <section className="guide-closing" aria-labelledby="guide-scope">
        <h2 id="guide-scope">{copy.scopeTitle}</h2>
        {copy.scope.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <h2>{copy.buildTitle}</h2>
        <p>{copy.build}</p>
      </section>
    </div>
  );
}
