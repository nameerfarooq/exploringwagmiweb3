import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "viem/chains";
declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
