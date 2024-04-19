import "./style.scss"

//duvida aq: essa formatação, pq não precisa das {}, quando isso pode acontecer?
const Link = ({ href, children }) => <a href={href}>{children}</a>


export default Link