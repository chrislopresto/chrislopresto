// https://github.com/remix-run/react-router/issues/12529#issuecomment-2539582742
import { createPagesFunctionHandler } from "@react-router/cloudflare";
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({ build });
