import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLinks(props: NavLinkProps) {
  // retorna a rota atual
  const { pathname } = useLocation()

  return (
    <Link
      // se o caminho atual for igual ao caminho do link
      // data-atribute ==> atributos nativos do HTML
      data-current={pathname === props.to}
      {...props}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    />
  )
}
