import axios from "axios";
import { HarmonyEvent } from "./api-events";

type ISODateString =
  | `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`
  | `${number}-${number}-${number}T${number}:${number}:${number}Z`;
interface BaseResponse<T> {
  data: {
    updated_at: ISODateString;
    items: T;
    pagination: Pagination;
  };
}

interface Pagination {
  has_more: boolean;
  page_number: number;
  page_size: number;
  total_count: number | null;
}

export interface Transaction {
  block_signed_at: ISODateString;
  block_height: number;
  tx_hash: string;
  tx_offset: number;
  successful: boolean;
  from_address: string;
  from_address_label: null | string;
  to_address: string;
  to_address_label: null | string;
  value: string;
  value_quote: number;
  gas_offered: number;
  gas_spent: number;
  gas_price: number;
  fees_paid: string;
  gas_quote: number;
  gas_quote_rate: number;

  log_events: {
    block_signed_at: ISODateString;
    sender_address: string;
    decoded: HarmonyEvent;
  }[];
}

const covalentKey = "ckey_1d37f91734d44443acdbb6a30bf";

export const covalentApiInstance = axios.create({
  baseURL: `https://api.covalenthq.com/v1/1666600000/`,
});

export const getTransactions = async (address: string, token_id: string) =>
  await (
    await covalentApiInstance.get<BaseResponse<Transaction[]>>(
      `tokens/${address}/nft_transactions/${token_id}/?quote-currency=USD&format=JSON&key=${covalentKey}`
    )
  ).data.data;
