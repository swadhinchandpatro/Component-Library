
type ConditionalProp = [any, string]
type ConditionalProps = Array<ConditionalProp>
/*
  Usage example:
  if u need to write
        <a {...(logo.url ? { href: logo.url } : {})} {...(logo.onClick ? { onClick: logo.onClick } : {})} className={`${styles.homeLogo}`} >
        <AssetResolver src={logo.src} className={`${styles.logo}`} />
      </a>
      <a {...(home.url ? { href: home.url } : {})} {...(home.onClick ? { onClick: home.onClick } : {})} className={`${styles.services}`}>
        <AssetResolver src={home.src} className={`${styles.serviceLogo}`} />
        <span className={`${styles.serviceLabel}`}>{home.label}</span>
      </a>
  Write instead
        <a {...handleConditionalProps([logo.url, 'href'], [logo.onClick, 'onClick'])} className={`${styles.homeLogo}`} >
        <AssetResolver src={logo.src} className={`${styles.logo}`} />
      </a>
      <a {...handleConditionalProps([home.url, 'href'], [home.onClick, 'onClick'])} className={`${styles.services}`}>
        <AssetResolver src={home.src} className={`${styles.serviceLogo}`} />
        <span className={`${styles.serviceLabel}`}>{home.label}</span>
      </a>
*/
export const handleConditionalProps = (...props: ConditionalProps) => {
  return props.reduce((attributes, prop) => {
    const attribute = prop[0] ? { [prop[1]]: prop[0] } : {};
    return Object.assign(attributes, attribute)
  }, {})
}