import { useLocation, Navigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { JsxElement } from "typescript";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";

type Props = {};
type PropsWithChildren<P> = P & { children?: ReactNode };

export function RequireAuth(props: PropsWithChildren<Props>) {
  let { children } = props;
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== "authenticated") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (children as ReactJSXElement) || null;
}
