import { findBinary } from "../../create-vibekit-app/src/utils/detect-binary";

export async function detect(name: string) {
  return findBinary(name);
}
