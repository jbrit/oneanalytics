//   HRC1155
interface TransferSingle {
  name: "TransferSingle";
  signature: "TransferSingle(indexed address _operator, indexed address _from, indexed address _to, uint256 _id, uint256 _amount)";
  params: [
    {
      name: "_operator";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_from";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_to";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_id";
      type: "uint256";
      indexed: false;
      decoded: true;
      value: string;
    },
    {
      name: "_amount";
      type: "uint256";
      indexed: false;
      decoded: true;
      value: string;
    }
  ];
}
interface TransferBatch {
  name: "TransferBatch";
  signature: "TransferBatch(indexed address _operator, indexed address _from, indexed address _to, uint256[] _ids, uint256[] _amounts)";
  params: [
    {
      name: "_operator";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_from";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_to";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_ids";
      type: "uint256[]";
      indexed: false;
      decoded: true;
      value: string[];
    },
    {
      name: "_amounts";
      type: "uint256[]";
      indexed: false;
      decoded: true;
      value: string[];
    }
  ];
}

//  HRC721
interface HRC721Transfer {
  name: "Transfer";
  signature: "Transfer(indexed address _from, indexed address _to, indexed uint256 _tokenId)";
  params: [
    {
      name: "_from";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_to";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_tokenId";
      type: "uint256";
      indexed: true;
      decoded: true;
      value: string;
    }
  ];
}

interface HRC721Approval {
  name: "Approval";
  signature: "Approval(indexed address _owner, indexed address _approved, indexed uint256 _tokenId)";
  params: [
    {
      name: "_owner";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_approved";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_tokenId";
      type: "uint256";
      indexed: true;
      decoded: true;
      value: string;
    }
  ];
}

// HRC20
interface HRC20Transfer {
  name: "Transfer";
  signature: "Transfer(indexed address _from, indexed address _to, uint256 _value)";
  params: [
    {
      name: "_from";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_to";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_value";
      type: "uint256";
      indexed: false;
      decoded: true;
      value: string;
    }
  ];
}

interface HRC20Approval {
  name: "Approval";
  signature: "Approval(indexed address _owner, indexed address _spender, uint256 _value)";
  params: [
    {
      name: "_owner";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_spender";
      type: "address";
      indexed: true;
      decoded: true;
      value: string;
    },
    {
      name: "_value";
      type: "uint256";
      indexed: false;
      decoded: true;
      value: string;
    }
  ];
}

interface UnknownEvent {
  name: string;
  signature: string;
  params: unknown[];
}

export type HarmonyEvent =
  | TransferSingle
  | TransferBatch
  | HRC721Transfer
  | HRC721Approval
  | HRC20Transfer
  | HRC20Approval
  | UnknownEvent;
