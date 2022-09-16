class AccountsResponse implements IAccountsResponse {
  accounts?: AccountInfo[];
  links?: Links;

  constructor(data?: IAccountsResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["accounts"])) {
        this.accounts = [] as any;
        for (let item of _data["accounts"])
          this.accounts!.push(AccountInfo.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): AccountsResponse {
    data = typeof data === "object" ? data : {};
    let result = new AccountsResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.accounts)) {
      data["accounts"] = [];
      for (let item of this.accounts) data["accounts"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface IAccountsResponse {
  accounts?: AccountInfo[];
  links?: Links;
}

class Allowance implements IAllowance {
  /** The granted amount of the spender's allowance. */
  amount_granted?: number;
  owner?: string | undefined;
  spender?: string | undefined;
  timestamp?: TimestampRange;

  constructor(data?: IAllowance) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount_granted = _data["amount_granted"];
      this.owner = _data["owner"];
      this.spender = _data["spender"];
      this.timestamp = _data["timestamp"]
        ? TimestampRange.fromJS(_data["timestamp"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): Allowance {
    data = typeof data === "object" ? data : {};
    let result = new Allowance();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount_granted"] = this.amount_granted;
    data["owner"] = this.owner;
    data["spender"] = this.spender;
    data["timestamp"] = this.timestamp
      ? this.timestamp.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IAllowance {
  /** The granted amount of the spender's allowance. */
  amount_granted?: number;
  owner?: string | undefined;
  spender?: string | undefined;
  timestamp?: TimestampRange;
}

class BalancesResponse implements IBalancesResponse {
  timestamp?: string | undefined;
  balances?: AccountBalance[];
  links?: Links;

  constructor(data?: IBalancesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.timestamp = _data["timestamp"];
      if (Array.isArray(_data["balances"])) {
        this.balances = [] as any;
        for (let item of _data["balances"])
          this.balances!.push(AccountBalance.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): BalancesResponse {
    data = typeof data === "object" ? data : {};
    let result = new BalancesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["timestamp"] = this.timestamp;
    if (Array.isArray(this.balances)) {
      data["balances"] = [];
      for (let item of this.balances) data["balances"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface IBalancesResponse {
  timestamp?: string | undefined;
  balances?: AccountBalance[];
  links?: Links;
}

class Contract implements IContract {
  admin_key?: Key | undefined;
  auto_renew_account?: string | undefined;
  auto_renew_period?: number | undefined;
  contract_id?: string | undefined;
  created_timestamp?: string | undefined;
  deleted?: boolean;
  evm_address?: string;
  expiration_timestamp?: string | undefined;
  file_id?: string | undefined;
  max_automatic_token_associations?: number | undefined;
  memo?: string;
  obtainer_id?: string | undefined;
  permanent_removal?: boolean | undefined;
  proxy_account_id?: string | undefined;
  timestamp?: TimestampRange;

  constructor(data?: IContract) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.admin_key = _data["admin_key"]
        ? Key.fromJS(_data["admin_key"])
        : <any>undefined;
      this.auto_renew_account = _data["auto_renew_account"];
      this.auto_renew_period = _data["auto_renew_period"];
      this.contract_id = _data["contract_id"];
      this.created_timestamp = _data["created_timestamp"];
      this.deleted = _data["deleted"];
      this.evm_address = _data["evm_address"];
      this.expiration_timestamp = _data["expiration_timestamp"];
      this.file_id = _data["file_id"];
      this.max_automatic_token_associations =
        _data["max_automatic_token_associations"];
      this.memo = _data["memo"];
      this.obtainer_id = _data["obtainer_id"];
      this.permanent_removal = _data["permanent_removal"];
      this.proxy_account_id = _data["proxy_account_id"];
      this.timestamp = _data["timestamp"]
        ? TimestampRange.fromJS(_data["timestamp"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): Contract {
    data = typeof data === "object" ? data : {};
    let result = new Contract();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["admin_key"] = this.admin_key
      ? this.admin_key.toJSON()
      : <any>undefined;
    data["auto_renew_account"] = this.auto_renew_account;
    data["auto_renew_period"] = this.auto_renew_period;
    data["contract_id"] = this.contract_id;
    data["created_timestamp"] = this.created_timestamp;
    data["deleted"] = this.deleted;
    data["evm_address"] = this.evm_address;
    data["expiration_timestamp"] = this.expiration_timestamp;
    data["file_id"] = this.file_id;
    data[
      "max_automatic_token_associations"
    ] = this.max_automatic_token_associations;
    data["memo"] = this.memo;
    data["obtainer_id"] = this.obtainer_id;
    data["permanent_removal"] = this.permanent_removal;
    data["proxy_account_id"] = this.proxy_account_id;
    data["timestamp"] = this.timestamp
      ? this.timestamp.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IContract {
  admin_key?: Key | undefined;
  auto_renew_account?: string | undefined;
  auto_renew_period?: number | undefined;
  contract_id?: string | undefined;
  created_timestamp?: string | undefined;
  deleted?: boolean;
  evm_address?: string;
  expiration_timestamp?: string | undefined;
  file_id?: string | undefined;
  max_automatic_token_associations?: number | undefined;
  memo?: string;
  obtainer_id?: string | undefined;
  permanent_removal?: boolean | undefined;
  proxy_account_id?: string | undefined;
  timestamp?: TimestampRange;
}

class ContractResponse extends Contract implements IContractResponse {
  /** The contract bytecode in hex */
  bytecode?: string | undefined;

  constructor(data?: IContractResponse) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      this.bytecode = _data["bytecode"];
    }
  }

  static fromJS(data: any): ContractResponse {
    data = typeof data === "object" ? data : {};
    let result = new ContractResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["bytecode"] = this.bytecode;
    super.toJSON(data);
    return data;
  }
}

interface IContractResponse extends IContract {
  /** The contract bytecode in hex */
  bytecode?: string | undefined;
}

class ContractsResponse implements IContractsResponse {
  contracts?: Contract[];
  links?: Links;

  constructor(data?: IContractsResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["contracts"])) {
        this.contracts = [] as any;
        for (let item of _data["contracts"])
          this.contracts!.push(Contract.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): ContractsResponse {
    data = typeof data === "object" ? data : {};
    let result = new ContractsResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.contracts)) {
      data["contracts"] = [];
      for (let item of this.contracts) data["contracts"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface IContractsResponse {
  contracts?: Contract[];
  links?: Links;
}

class ContractResultResponse implements IContractResultResponse {
  contracts?: ContractResultDetails;

  constructor(data?: IContractResultResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.contracts = _data["contracts"]
        ? ContractResultDetails.fromJS(_data["contracts"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): ContractResultResponse {
    data = typeof data === "object" ? data : {};
    let result = new ContractResultResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["contracts"] = this.contracts
      ? this.contracts.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IContractResultResponse {
  contracts?: ContractResultDetails;
}

class ContractResultsResponse implements IContractResultsResponse {
  contracts?: ContractResult[];
  links?: Links;

  constructor(data?: IContractResultsResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["contracts"])) {
        this.contracts = [] as any;
        for (let item of _data["contracts"])
          this.contracts!.push(ContractResult.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): ContractResultsResponse {
    data = typeof data === "object" ? data : {};
    let result = new ContractResultsResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.contracts)) {
      data["contracts"] = [];
      for (let item of this.contracts) data["contracts"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface IContractResultsResponse {
  contracts?: ContractResult[];
  links?: Links;
}

class ContractLogsResponse implements IContractLogsResponse {
  logs?: ContractLog[];

  constructor(data?: IContractLogsResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["logs"])) {
        this.logs = [] as any;
        for (let item of _data["logs"])
          this.logs!.push(ContractLog.fromJS(item));
      }
    }
  }

  static fromJS(data: any): ContractLogsResponse {
    data = typeof data === "object" ? data : {};
    let result = new ContractLogsResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.logs)) {
      data["logs"] = [];
      for (let item of this.logs) data["logs"].push(item.toJSON());
    }
    return data;
  }
}

interface IContractLogsResponse {
  logs?: ContractLog[];
}

class CryptoAllowancesResponse implements ICryptoAllowancesResponse {
  allowances?: CryptoAllowance[];
  links?: Links;

  constructor(data?: ICryptoAllowancesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["allowances"])) {
        this.allowances = [] as any;
        for (let item of _data["allowances"])
          this.allowances!.push(CryptoAllowance.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): CryptoAllowancesResponse {
    data = typeof data === "object" ? data : {};
    let result = new CryptoAllowancesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.allowances)) {
      data["allowances"] = [];
      for (let item of this.allowances) data["allowances"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ICryptoAllowancesResponse {
  allowances?: CryptoAllowance[];
  links?: Links;
}

class NetworkExchangeRateSetResponse
  implements INetworkExchangeRateSetResponse {
  current_rate?: ExchangeRate;
  next_rate?: ExchangeRate;
  timestamp?: string;

  constructor(data?: INetworkExchangeRateSetResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.current_rate = _data["current_rate"]
        ? ExchangeRate.fromJS(_data["current_rate"])
        : <any>undefined;
      this.next_rate = _data["next_rate"]
        ? ExchangeRate.fromJS(_data["next_rate"])
        : <any>undefined;
      this.timestamp = _data["timestamp"];
    }
  }

  static fromJS(data: any): NetworkExchangeRateSetResponse {
    data = typeof data === "object" ? data : {};
    let result = new NetworkExchangeRateSetResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["current_rate"] = this.current_rate
      ? this.current_rate.toJSON()
      : <any>undefined;
    data["next_rate"] = this.next_rate
      ? this.next_rate.toJSON()
      : <any>undefined;
    data["timestamp"] = this.timestamp;
    return data;
  }
}

interface INetworkExchangeRateSetResponse {
  current_rate?: ExchangeRate;
  next_rate?: ExchangeRate;
  timestamp?: string;
}

class NetworkFeesResponse implements INetworkFeesResponse {
  fees?: NetworkFee[];
  timestamp?: string;

  constructor(data?: INetworkFeesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["fees"])) {
        this.fees = [] as any;
        for (let item of _data["fees"])
          this.fees!.push(NetworkFee.fromJS(item));
      }
      this.timestamp = _data["timestamp"];
    }
  }

  static fromJS(data: any): NetworkFeesResponse {
    data = typeof data === "object" ? data : {};
    let result = new NetworkFeesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.fees)) {
      data["fees"] = [];
      for (let item of this.fees) data["fees"].push(item.toJSON());
    }
    data["timestamp"] = this.timestamp;
    return data;
  }
}

interface INetworkFeesResponse {
  fees?: NetworkFee[];
  timestamp?: string;
}

class NetworkNodesResponse implements INetworkNodesResponse {
  nodes?: NetworkNode[];
  links?: Links;

  constructor(data?: INetworkNodesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["nodes"])) {
        this.nodes = [] as any;
        for (let item of _data["nodes"])
          this.nodes!.push(NetworkNode.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): NetworkNodesResponse {
    data = typeof data === "object" ? data : {};
    let result = new NetworkNodesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.nodes)) {
      data["nodes"] = [];
      for (let item of this.nodes) data["nodes"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface INetworkNodesResponse {
  nodes?: NetworkNode[];
  links?: Links;
}

class NetworkSupplyResponse implements INetworkSupplyResponse {
  /** The network's released supply of hbars in tinybars */
  released_supply?: string;
  timestamp?: Timestamp;
  /** The network's total supply of hbars in tinybars */
  total_supply?: string;

  constructor(data?: INetworkSupplyResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.released_supply = _data["released_supply"];
      this.timestamp = _data["timestamp"];
      this.total_supply = _data["total_supply"];
    }
  }

  static fromJS(data: any): NetworkSupplyResponse {
    data = typeof data === "object" ? data : {};
    let result = new NetworkSupplyResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["released_supply"] = this.released_supply;
    data["timestamp"] = this.timestamp;
    data["total_supply"] = this.total_supply;
    return data;
  }
}

interface INetworkSupplyResponse {
  /** The network's released supply of hbars in tinybars */
  released_supply?: string;
  timestamp?: Timestamp;
  /** The network's total supply of hbars in tinybars */
  total_supply?: string;
}

class SchedulesResponse implements ISchedulesResponse {
  schedules?: Schedule[];
  links?: Links;

  constructor(data?: ISchedulesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["schedules"])) {
        this.schedules = [] as any;
        for (let item of _data["schedules"])
          this.schedules!.push(Schedule.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): SchedulesResponse {
    data = typeof data === "object" ? data : {};
    let result = new SchedulesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.schedules)) {
      data["schedules"] = [];
      for (let item of this.schedules) data["schedules"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ISchedulesResponse {
  schedules?: Schedule[];
  links?: Links;
}

class BlocksResponse implements IBlocksResponse {
  schedules?: Block[];
  links?: Links;

  constructor(data?: IBlocksResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["schedules"])) {
        this.schedules = [] as any;
        for (let item of _data["schedules"])
          this.schedules!.push(Block.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): BlocksResponse {
    data = typeof data === "object" ? data : {};
    let result = new BlocksResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.schedules)) {
      data["schedules"] = [];
      for (let item of this.schedules) data["schedules"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface IBlocksResponse {
  schedules?: Block[];
  links?: Links;
}

class StateProofResponse implements IStateProofResponse {
  transactions?: StateProofFiles;

  constructor(data?: IStateProofResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.transactions = _data["transactions"]
        ? StateProofFiles.fromJS(_data["transactions"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): StateProofResponse {
    data = typeof data === "object" ? data : {};
    let result = new StateProofResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["transactions"] = this.transactions
      ? this.transactions.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IStateProofResponse {
  transactions?: StateProofFiles;
}

class TokenAllowancesResponse implements ITokenAllowancesResponse {
  allowances?: TokenAllowance[];
  links?: Links;

  constructor(data?: ITokenAllowancesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["allowances"])) {
        this.allowances = [] as any;
        for (let item of _data["allowances"])
          this.allowances!.push(TokenAllowance.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): TokenAllowancesResponse {
    data = typeof data === "object" ? data : {};
    let result = new TokenAllowancesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.allowances)) {
      data["allowances"] = [];
      for (let item of this.allowances) data["allowances"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ITokenAllowancesResponse {
  allowances?: TokenAllowance[];
  links?: Links;
}

class TokenBalancesResponse implements ITokenBalancesResponse {
  timestamp?: string | undefined;
  balances?: Balance[];
  links?: Links;

  constructor(data?: ITokenBalancesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.timestamp = _data["timestamp"];
      if (Array.isArray(_data["balances"])) {
        this.balances = [] as any;
        for (let item of _data["balances"])
          this.balances!.push(Balance.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): TokenBalancesResponse {
    data = typeof data === "object" ? data : {};
    let result = new TokenBalancesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["timestamp"] = this.timestamp;
    if (Array.isArray(this.balances)) {
      data["balances"] = [];
      for (let item of this.balances) data["balances"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ITokenBalancesResponse {
  timestamp?: string | undefined;
  balances?: Balance[];
  links?: Links;
}

class TokensResponse implements ITokensResponse {
  tokens?: Token[];
  links?: Links;

  constructor(data?: ITokensResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["tokens"])) {
        this.tokens = [] as any;
        for (let item of _data["tokens"]) this.tokens!.push(Token.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): TokensResponse {
    data = typeof data === "object" ? data : {};
    let result = new TokensResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.tokens)) {
      data["tokens"] = [];
      for (let item of this.tokens) data["tokens"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ITokensResponse {
  tokens?: Token[];
  links?: Links;
}

class TopicMessagesResponse implements ITopicMessagesResponse {
  messages?: TopicMessage[];
  links?: Links;

  constructor(data?: ITopicMessagesResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["messages"])) {
        this.messages = [] as any;
        for (let item of _data["messages"])
          this.messages!.push(TopicMessage.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): TopicMessagesResponse {
    data = typeof data === "object" ? data : {};
    let result = new TopicMessagesResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.messages)) {
      data["messages"] = [];
      for (let item of this.messages) data["messages"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ITopicMessagesResponse {
  messages?: TopicMessage[];
  links?: Links;
}

class TransactionByIdResponse implements ITransactionByIdResponse {
  transactions?: TransactionDetail[];

  constructor(data?: ITransactionByIdResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["transactions"])) {
        this.transactions = [] as any;
        for (let item of _data["transactions"])
          this.transactions!.push(TransactionDetail.fromJS(item));
      }
    }
  }

  static fromJS(data: any): TransactionByIdResponse {
    data = typeof data === "object" ? data : {};
    let result = new TransactionByIdResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.transactions)) {
      data["transactions"] = [];
      for (let item of this.transactions)
        data["transactions"].push(item.toJSON());
    }
    return data;
  }
}

interface ITransactionByIdResponse {
  transactions?: TransactionDetail[];
}

class TransactionsResponse implements ITransactionsResponse {
  transactions?: Transaction[];
  links?: Links;

  constructor(data?: ITransactionsResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["transactions"])) {
        this.transactions = [] as any;
        for (let item of _data["transactions"])
          this.transactions!.push(Transaction.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): TransactionsResponse {
    data = typeof data === "object" ? data : {};
    let result = new TransactionsResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.transactions)) {
      data["transactions"] = [];
      for (let item of this.transactions)
        data["transactions"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface ITransactionsResponse {
  transactions?: Transaction[];
  links?: Links;
}

class AccountInfo implements IAccountInfo {
  account!: string | undefined;
  alias?: string | undefined;
  auto_renew_period!: any | undefined;
  balance!: Balance | undefined;
  deleted!: boolean | undefined;
  ethereum_nonce?: number | undefined;
  evm_address?: string | undefined;
  expiry_timestamp!: string | undefined;
  key!: Key | undefined;
  max_automatic_token_associations!: number | undefined;
  memo!: string | undefined;
  receiver_sig_required!: boolean | undefined;

  constructor(data?: IAccountInfo) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.account = _data["account"];
      this.alias = _data["alias"];
      this.auto_renew_period = _data["auto_renew_period"];
      this.balance = _data["balance"]
        ? Balance.fromJS(_data["balance"])
        : <any>undefined;
      this.deleted = _data["deleted"];
      this.ethereum_nonce = _data["ethereum_nonce"];
      this.evm_address = _data["evm_address"];
      this.expiry_timestamp = _data["expiry_timestamp"];
      this.key = _data["key"] ? Key.fromJS(_data["key"]) : <any>undefined;
      this.max_automatic_token_associations =
        _data["max_automatic_token_associations"];
      this.memo = _data["memo"];
      this.receiver_sig_required = _data["receiver_sig_required"];
    }
  }

  static fromJS(data: any): AccountInfo {
    data = typeof data === "object" ? data : {};
    let result = new AccountInfo();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["account"] = this.account;
    data["alias"] = this.alias;
    data["auto_renew_period"] = this.auto_renew_period;
    data["balance"] = this.balance ? this.balance.toJSON() : <any>undefined;
    data["deleted"] = this.deleted;
    data["ethereum_nonce"] = this.ethereum_nonce;
    data["evm_address"] = this.evm_address;
    data["expiry_timestamp"] = this.expiry_timestamp;
    data["key"] = this.key ? this.key.toJSON() : <any>undefined;
    data[
      "max_automatic_token_associations"
    ] = this.max_automatic_token_associations;
    data["memo"] = this.memo;
    data["receiver_sig_required"] = this.receiver_sig_required;
    return data;
  }
}

interface IAccountInfo {
  account: string | undefined;
  alias?: string | undefined;
  auto_renew_period: any | undefined;
  balance: Balance | undefined;
  deleted: boolean | undefined;
  ethereum_nonce?: number | undefined;
  evm_address?: string | undefined;
  expiry_timestamp: string | undefined;
  key: Key | undefined;
  max_automatic_token_associations: number | undefined;
  memo: string | undefined;
  receiver_sig_required: boolean | undefined;
}

class AccountBalance implements IAccountBalance {
  account!: string | undefined;
  balance!: number;
  tokens!: TokenBalance[];

  constructor(data?: IAccountBalance) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
    if (!data) {
      this.tokens = [];
    }
  }

  init(_data?: any) {
    if (_data) {
      this.account = _data["account"];
      this.balance = _data["balance"];
      if (Array.isArray(_data["tokens"])) {
        this.tokens = [] as any;
        for (let item of _data["tokens"])
          this.tokens!.push(TokenBalance.fromJS(item));
      }
    }
  }

  static fromJS(data: any): AccountBalance {
    data = typeof data === "object" ? data : {};
    let result = new AccountBalance();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["account"] = this.account;
    data["balance"] = this.balance;
    if (Array.isArray(this.tokens)) {
      data["tokens"] = [];
      for (let item of this.tokens) data["tokens"].push(item.toJSON());
    }
    return data;
  }
}

interface IAccountBalance {
  account: string | undefined;
  balance: number;
  tokens: TokenBalance[];
}

class AccountBalanceTransactions implements IAccountBalanceTransactions {
  transactions?: Transaction[];
  balance?: Balance | undefined;
  account?: string | undefined;
  alias?: string | undefined;
  ethereum_nonce?: number | undefined;
  evm_address?: string | undefined;
  expiry_timestamp?: string | undefined;
  auto_renew_period?: any | undefined;
  key?: Key | undefined;
  deleted?: boolean;
  max_automatic_token_associations?: number;
  memo?: string;
  receiver_sig_required?: boolean | undefined;
  links?: Links;

  constructor(data?: IAccountBalanceTransactions) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["transactions"])) {
        this.transactions = [] as any;
        for (let item of _data["transactions"])
          this.transactions!.push(Transaction.fromJS(item));
      }
      this.balance = _data["balance"]
        ? Balance.fromJS(_data["balance"])
        : <any>undefined;
      this.account = _data["account"];
      this.alias = _data["alias"];
      this.ethereum_nonce = _data["ethereum_nonce"];
      this.evm_address = _data["evm_address"];
      this.expiry_timestamp = _data["expiry_timestamp"];
      this.auto_renew_period = _data["auto_renew_period"];
      this.key = _data["key"] ? Key.fromJS(_data["key"]) : <any>undefined;
      this.deleted = _data["deleted"];
      this.max_automatic_token_associations =
        _data["max_automatic_token_associations"];
      this.memo = _data["memo"];
      this.receiver_sig_required = _data["receiver_sig_required"];
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): AccountBalanceTransactions {
    data = typeof data === "object" ? data : {};
    let result = new AccountBalanceTransactions();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.transactions)) {
      data["transactions"] = [];
      for (let item of this.transactions)
        data["transactions"].push(item.toJSON());
    }
    data["balance"] = this.balance ? this.balance.toJSON() : <any>undefined;
    data["account"] = this.account;
    data["alias"] = this.alias;
    data["ethereum_nonce"] = this.ethereum_nonce;
    data["evm_address"] = this.evm_address;
    data["expiry_timestamp"] = this.expiry_timestamp;
    data["auto_renew_period"] = this.auto_renew_period;
    data["key"] = this.key ? this.key.toJSON() : <any>undefined;
    data["deleted"] = this.deleted;
    data[
      "max_automatic_token_associations"
    ] = this.max_automatic_token_associations;
    data["memo"] = this.memo;
    data["receiver_sig_required"] = this.receiver_sig_required;
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface IAccountBalanceTransactions {
  transactions?: Transaction[];
  balance?: Balance | undefined;
  account?: string | undefined;
  alias?: string | undefined;
  ethereum_nonce?: number | undefined;
  evm_address?: string | undefined;
  expiry_timestamp?: string | undefined;
  auto_renew_period?: any | undefined;
  key?: Key | undefined;
  deleted?: boolean;
  max_automatic_token_associations?: number;
  memo?: string;
  receiver_sig_required?: boolean | undefined;
  links?: Links;
}

class Balance implements IBalance {
  timestamp!: string | undefined;
  balance!: number | undefined;
  tokens!: Tokens[];

  constructor(data?: IBalance) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
    if (!data) {
      this.tokens = [];
    }
  }

  init(_data?: any) {
    if (_data) {
      this.timestamp = _data["timestamp"];
      this.balance = _data["balance"];
      if (Array.isArray(_data["tokens"])) {
        this.tokens = [] as any;
        for (let item of _data["tokens"])
          this.tokens!.push(Tokens.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Balance {
    data = typeof data === "object" ? data : {};
    let result = new Balance();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["timestamp"] = this.timestamp;
    data["balance"] = this.balance;
    if (Array.isArray(this.tokens)) {
      data["tokens"] = [];
      for (let item of this.tokens) data["tokens"].push(item.toJSON());
    }
    return data;
  }
}

interface IBalance {
  timestamp: string | undefined;
  balance: number | undefined;
  tokens: Tokens[];
}

class ChunkInfo implements IChunkInfo {
  initial_transaction_id?: TransactionId;
  number?: number;
  total?: number;

  constructor(data?: IChunkInfo) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.initial_transaction_id = _data["initial_transaction_id"]
        ? TransactionId.fromJS(_data["initial_transaction_id"])
        : <any>undefined;
      this.number = _data["number"];
      this.total = _data["total"];
    }
  }

  static fromJS(data: any): ChunkInfo {
    data = typeof data === "object" ? data : {};
    let result = new ChunkInfo();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["initial_transaction_id"] = this.initial_transaction_id
      ? this.initial_transaction_id.toJSON()
      : <any>undefined;
    data["number"] = this.number;
    data["total"] = this.total;
    return data;
  }
}

interface IChunkInfo {
  initial_transaction_id?: TransactionId;
  number?: number;
  total?: number;
}

class ContractResultLog implements IContractResultLog {
  /** The hex encoded EVM address of the contract */
  address?: string;
  bloom?: Bloom;
  contract_id?: string | undefined;
  /** The hex encoded data of the contract log */
  data?: string | undefined;
  /** The index of the contract log in the chain of logs for an execution */
  index?: number;
  topics?: string[];

  constructor(data?: IContractResultLog) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.address = _data["address"];
      this.bloom = _data["bloom"];
      this.contract_id = _data["contract_id"];
      this.data = _data["data"];
      this.index = _data["index"];
      if (Array.isArray(_data["topics"])) {
        this.topics = [] as any;
        for (let item of _data["topics"]) this.topics!.push(item);
      }
    }
  }

  static fromJS(data: any): ContractResultLog {
    data = typeof data === "object" ? data : {};
    let result = new ContractResultLog();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["address"] = this.address;
    data["bloom"] = this.bloom;
    data["contract_id"] = this.contract_id;
    data["data"] = this.data;
    data["index"] = this.index;
    if (Array.isArray(this.topics)) {
      data["topics"] = [];
      for (let item of this.topics) data["topics"].push(item);
    }
    return data;
  }
}

interface IContractResultLog {
  /** The hex encoded EVM address of the contract */
  address?: string;
  bloom?: Bloom;
  contract_id?: string | undefined;
  /** The hex encoded data of the contract log */
  data?: string | undefined;
  /** The index of the contract log in the chain of logs for an execution */
  index?: number;
  topics?: string[];
}

class ContractLog extends ContractResultLog implements IContractLog {
  root_contract_id?: Root_contract_id;
  timestamp?: string;

  constructor(data?: IContractLog) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      this.root_contract_id = _data["root_contract_id"];
      this.timestamp = _data["timestamp"];
    }
  }

  static fromJS(data: any): ContractLog {
    data = typeof data === "object" ? data : {};
    let result = new ContractLog();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["root_contract_id"] = this.root_contract_id;
    data["timestamp"] = this.timestamp;
    super.toJSON(data);
    return data;
  }
}

interface IContractLog extends IContractResultLog {
  root_contract_id?: Root_contract_id;
  timestamp?: string;
}

class ContractResult implements IContractResult {
  /** The number of tinybars sent to the function */
  amount?: number | undefined;
  bloom?: Bloom;
  /** The hex encoded result returned by the function */
  call_result?: string | undefined;
  contract_id?: string | undefined;
  /** The network's released supply of hbars in tinybars */
  created_contract_ids?: (string | undefined)[] | undefined;
  /** The message when an error occurs during smart contract execution */
  error_message?: string | undefined;
  from?: string;
  /** The hex encoded parameters passed to the function */
  function_parameters?: string | undefined;
  /** The maximum units of gas allowed for contract execution */
  gas_limit?: number;
  /** The units of gas used to execute contract */
  gas_used?: number | undefined;
  /** A hex encoded 32 byte hash and it is only populated for Ethereum transaction case */
  hash?: string | undefined;
  /** The result of the transaction */
  result?: string;
  /** The status of the transaction, 0x1 for a SUCCESS transaction and 0x0 for all else */
  status?: string;
  timestamp?: string;
  to?: string | undefined;

  constructor(data?: IContractResult) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount = _data["amount"];
      this.bloom = _data["bloom"];
      this.call_result = _data["call_result"];
      this.contract_id = _data["contract_id"];
      if (Array.isArray(_data["created_contract_ids"])) {
        this.created_contract_ids = [] as any;
        for (let item of _data["created_contract_ids"])
          this.created_contract_ids!.push(item);
      }
      this.error_message = _data["error_message"];
      this.from = _data["from"];
      this.function_parameters = _data["function_parameters"];
      this.gas_limit = _data["gas_limit"];
      this.gas_used = _data["gas_used"];
      this.hash = _data["hash"];
      this.result = _data["result"];
      this.status = _data["status"];
      this.timestamp = _data["timestamp"];
      this.to = _data["to"];
    }
  }

  static fromJS(data: any): ContractResult {
    data = typeof data === "object" ? data : {};
    let result = new ContractResult();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount"] = this.amount;
    data["bloom"] = this.bloom;
    data["call_result"] = this.call_result;
    data["contract_id"] = this.contract_id;
    if (Array.isArray(this.created_contract_ids)) {
      data["created_contract_ids"] = [];
      for (let item of this.created_contract_ids)
        data["created_contract_ids"].push(item);
    }
    data["error_message"] = this.error_message;
    data["from"] = this.from;
    data["function_parameters"] = this.function_parameters;
    data["gas_limit"] = this.gas_limit;
    data["gas_used"] = this.gas_used;
    data["hash"] = this.hash;
    data["result"] = this.result;
    data["status"] = this.status;
    data["timestamp"] = this.timestamp;
    data["to"] = this.to;
    return data;
  }
}

interface IContractResult {
  /** The number of tinybars sent to the function */
  amount?: number | undefined;
  bloom?: Bloom;
  /** The hex encoded result returned by the function */
  call_result?: string | undefined;
  contract_id?: string | undefined;
  /** The network's released supply of hbars in tinybars */
  created_contract_ids?: (string | undefined)[] | undefined;
  /** The message when an error occurs during smart contract execution */
  error_message?: string | undefined;
  from?: string;
  /** The hex encoded parameters passed to the function */
  function_parameters?: string | undefined;
  /** The maximum units of gas allowed for contract execution */
  gas_limit?: number;
  /** The units of gas used to execute contract */
  gas_used?: number | undefined;
  /** A hex encoded 32 byte hash and it is only populated for Ethereum transaction case */
  hash?: string | undefined;
  /** The result of the transaction */
  result?: string;
  /** The status of the transaction, 0x1 for a SUCCESS transaction and 0x0 for all else */
  status?: string;
  timestamp?: string;
  to?: string | undefined;
}

class ContractResultDetails extends ContractResult
  implements IContractResultDetails {
  /** The hex encoded access_list of the wrapped ethereum transaction */
  access_list?: string | undefined;
  /** The total amount of gas used in the block */
  block_gas_used?: number | undefined;
  /** The hex encoded block (record file chain) hash */
  block_hash?: string | undefined;
  /** The block number. Since Hedera does not have the native concept of blocks, this counts the number of record files seen since the mirror node's configured start date. This can vary between mirror nodes that use different start dates. */
  block_number?: number | undefined;
  /** The hex encoded chain_id of the wrapped ethereum transaction */
  chain_id?: string | undefined;
  /** The hex encoded gas_price of the wrapped ethereum transaction */
  gas_price?: string | undefined;
  logs?: ContractResultLog[];
  /** The hex encoded max_fee_per_gas of the wrapped ethereum transaction */
  max_fee_per_gas?: string | undefined;
  /** The hex encoded max_priority_fee_per_gas of the wrapped ethereum transaction */
  max_priority_fee_per_gas?: string | undefined;
  /** The nonce of the wrapped ethereum transaction */
  nonce?: number | undefined;
  /** The hex encoded signature_r of the wrapped ethereum transaction */
  r?: string | undefined;
  /** The hex encoded signature_s of the wrapped ethereum transaction */
  s?: string | undefined;
  state_changes?: ContractResultStateChange[];
  /** The position of the transaction in the block */
  transaction_index?: number | undefined;
  /** The type of the wrapped ethereum transaction, 0 (Pre-Eip1559) or 2 (Post-Eip1559) */
  type?: number | undefined;
  /** The recovery_id of the wrapped ethereum transaction */
  v?: number | undefined;

  constructor(data?: IContractResultDetails) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      this.access_list = _data["access_list"];
      this.block_gas_used = _data["block_gas_used"];
      this.block_hash = _data["block_hash"];
      this.block_number = _data["block_number"];
      this.chain_id = _data["chain_id"];
      this.hash = _data["hash"];
      this.gas_price = _data["gas_price"];
      if (Array.isArray(_data["logs"])) {
        this.logs = [] as any;
        for (let item of _data["logs"])
          this.logs!.push(ContractResultLog.fromJS(item));
      }
      this.max_fee_per_gas = _data["max_fee_per_gas"];
      this.max_priority_fee_per_gas = _data["max_priority_fee_per_gas"];
      this.nonce = _data["nonce"];
      this.r = _data["r"];
      this.s = _data["s"];
      if (Array.isArray(_data["state_changes"])) {
        this.state_changes = [] as any;
        for (let item of _data["state_changes"])
          this.state_changes!.push(ContractResultStateChange.fromJS(item));
      }
      this.transaction_index = _data["transaction_index"];
      this.type = _data["type"];
      this.v = _data["v"];
    }
  }

  static fromJS(data: any): ContractResultDetails {
    data = typeof data === "object" ? data : {};
    let result = new ContractResultDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["access_list"] = this.access_list;
    data["block_gas_used"] = this.block_gas_used;
    data["block_hash"] = this.block_hash;
    data["block_number"] = this.block_number;
    data["chain_id"] = this.chain_id;
    data["hash"] = this.hash;
    data["gas_price"] = this.gas_price;
    if (Array.isArray(this.logs)) {
      data["logs"] = [];
      for (let item of this.logs) data["logs"].push(item.toJSON());
    }
    data["max_fee_per_gas"] = this.max_fee_per_gas;
    data["max_priority_fee_per_gas"] = this.max_priority_fee_per_gas;
    data["nonce"] = this.nonce;
    data["r"] = this.r;
    data["s"] = this.s;
    if (Array.isArray(this.state_changes)) {
      data["state_changes"] = [];
      for (let item of this.state_changes)
        data["state_changes"].push(item.toJSON());
    }
    data["transaction_index"] = this.transaction_index;
    data["type"] = this.type;
    data["v"] = this.v;
    super.toJSON(data);
    return data;
  }
}

interface IContractResultDetails extends IContractResult {
  /** The hex encoded access_list of the wrapped ethereum transaction */
  access_list?: string | undefined;
  /** The total amount of gas used in the block */
  block_gas_used?: number | undefined;
  /** The hex encoded block (record file chain) hash */
  block_hash?: string | undefined;
  /** The block number. Since Hedera does not have the native concept of blocks, this counts the number of record files seen since the mirror node's configured start date. This can vary between mirror nodes that use different start dates. */
  block_number?: number | undefined;
  /** The hex encoded chain_id of the wrapped ethereum transaction */
  chain_id?: string | undefined;
  /** The hex encoded transaction hash */
  hash?: string;
  /** The hex encoded gas_price of the wrapped ethereum transaction */
  gas_price?: string | undefined;
  logs?: ContractResultLog[];
  /** The hex encoded max_fee_per_gas of the wrapped ethereum transaction */
  max_fee_per_gas?: string | undefined;
  /** The hex encoded max_priority_fee_per_gas of the wrapped ethereum transaction */
  max_priority_fee_per_gas?: string | undefined;
  /** The nonce of the wrapped ethereum transaction */
  nonce?: number | undefined;
  /** The hex encoded signature_r of the wrapped ethereum transaction */
  r?: string | undefined;
  /** The hex encoded signature_s of the wrapped ethereum transaction */
  s?: string | undefined;
  state_changes?: ContractResultStateChange[];
  /** The position of the transaction in the block */
  transaction_index?: number | undefined;
  /** The type of the wrapped ethereum transaction, 0 (Pre-Eip1559) or 2 (Post-Eip1559) */
  type?: number | undefined;
  /** The recovery_id of the wrapped ethereum transaction */
  v?: number | undefined;
}

class ContractResultStateChange implements IContractResultStateChange {
  address?: string;
  contract_id?: string | undefined;
  /** The hex encoded storage slot changed. */
  slot?: string;
  /** The hex encoded value read from the storage slot. */
  value_read?: string;
  /** The hex encoded value written to the slot. `null` implies no value written. */
  value_written?: string | undefined;

  constructor(data?: IContractResultStateChange) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.address = _data["address"];
      this.contract_id = _data["contract_id"];
      this.slot = _data["slot"];
      this.value_read = _data["value_read"];
      this.value_written = _data["value_written"];
    }
  }

  static fromJS(data: any): ContractResultStateChange {
    data = typeof data === "object" ? data : {};
    let result = new ContractResultStateChange();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["address"] = this.address;
    data["contract_id"] = this.contract_id;
    data["slot"] = this.slot;
    data["value_read"] = this.value_read;
    data["value_written"] = this.value_written;
    return data;
  }
}

interface IContractResultStateChange {
  address?: string;
  contract_id?: string | undefined;
  /** The hex encoded storage slot changed. */
  slot?: string;
  /** The hex encoded value read from the storage slot. */
  value_read?: string;
  /** The hex encoded value written to the slot. `null` implies no value written. */
  value_written?: string | undefined;
}

class CustomFees implements ICustomFees {
  created_timestamp?: string;
  fixed_fees?: FixedFee[];
  fractional_fees?: FractionalFee[];
  royalty_fees?: RoyaltyFee[];

  constructor(data?: ICustomFees) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.created_timestamp = _data["created_timestamp"];
      if (Array.isArray(_data["fixed_fees"])) {
        this.fixed_fees = [] as any;
        for (let item of _data["fixed_fees"])
          this.fixed_fees!.push(FixedFee.fromJS(item));
      }
      if (Array.isArray(_data["fractional_fees"])) {
        this.fractional_fees = [] as any;
        for (let item of _data["fractional_fees"])
          this.fractional_fees!.push(FractionalFee.fromJS(item));
      }
      if (Array.isArray(_data["royalty_fees"])) {
        this.royalty_fees = [] as any;
        for (let item of _data["royalty_fees"])
          this.royalty_fees!.push(RoyaltyFee.fromJS(item));
      }
    }
  }

  static fromJS(data: any): CustomFees {
    data = typeof data === "object" ? data : {};
    let result = new CustomFees();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["created_timestamp"] = this.created_timestamp;
    if (Array.isArray(this.fixed_fees)) {
      data["fixed_fees"] = [];
      for (let item of this.fixed_fees) data["fixed_fees"].push(item.toJSON());
    }
    if (Array.isArray(this.fractional_fees)) {
      data["fractional_fees"] = [];
      for (let item of this.fractional_fees)
        data["fractional_fees"].push(item.toJSON());
    }
    if (Array.isArray(this.royalty_fees)) {
      data["royalty_fees"] = [];
      for (let item of this.royalty_fees)
        data["royalty_fees"].push(item.toJSON());
    }
    return data;
  }
}

interface ICustomFees {
  created_timestamp?: string;
  fixed_fees?: FixedFee[];
  fractional_fees?: FractionalFee[];
  royalty_fees?: RoyaltyFee[];
}

class CryptoAllowance extends Allowance implements ICryptoAllowance {
  constructor(data?: ICryptoAllowance) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      this.amount_granted = _data["amount_granted"];
    }
  }

  static fromJS(data: any): CryptoAllowance {
    data = typeof data === "object" ? data : {};
    let result = new CryptoAllowance();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount_granted"] = this.amount_granted;
    super.toJSON(data);
    return data;
  }
}

interface ICryptoAllowance extends IAllowance {
  /** The granted amount of the spender's allowance in tinybars. */
  amount_granted?: any;
}

class ErrorDto implements IErrorDto {
  _status?: _status;

  constructor(data?: IErrorDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this._status = _data["_status"]
        ? _status.fromJS(_data["_status"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): ErrorDto {
    data = typeof data === "object" ? data : {};
    let result = new ErrorDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["_status"] = this._status ? this._status.toJSON() : <any>undefined;
    return data;
  }
}

interface IErrorDto {
  _status?: _status;
}

class ExchangeRate implements IExchangeRate {
  cent_equivalent?: number;
  expiration_time?: number;
  hbar_equivalent?: number;

  constructor(data?: IExchangeRate) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.cent_equivalent = _data["cent_equivalent"];
      this.expiration_time = _data["expiration_time"];
      this.hbar_equivalent = _data["hbar_equivalent"];
    }
  }

  static fromJS(data: any): ExchangeRate {
    data = typeof data === "object" ? data : {};
    let result = new ExchangeRate();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["cent_equivalent"] = this.cent_equivalent;
    data["expiration_time"] = this.expiration_time;
    data["hbar_equivalent"] = this.hbar_equivalent;
    return data;
  }
}

interface IExchangeRate {
  cent_equivalent?: number;
  expiration_time?: number;
  hbar_equivalent?: number;
}

class FixedFee implements IFixedFee {
  amount?: number;
  collector_account_id?: string | undefined;
  denominating_token_id?: string | undefined;

  constructor(data?: IFixedFee) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount = _data["amount"];
      this.collector_account_id = _data["collector_account_id"];
      this.denominating_token_id = _data["denominating_token_id"];
    }
  }

  static fromJS(data: any): FixedFee {
    data = typeof data === "object" ? data : {};
    let result = new FixedFee();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount"] = this.amount;
    data["collector_account_id"] = this.collector_account_id;
    data["denominating_token_id"] = this.denominating_token_id;
    return data;
  }
}

interface IFixedFee {
  amount?: number;
  collector_account_id?: string | undefined;
  denominating_token_id?: string | undefined;
}

class FractionalFee implements IFractionalFee {
  amount?: Amount;
  collector_account_id?: string | undefined;
  denominating_token_id?: string | undefined;
  maximum?: number | undefined;
  minimum?: number;
  net_of_transfers?: boolean;

  constructor(data?: IFractionalFee) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount = _data["amount"]
        ? Amount.fromJS(_data["amount"])
        : <any>undefined;
      this.collector_account_id = _data["collector_account_id"];
      this.denominating_token_id = _data["denominating_token_id"];
      this.maximum = _data["maximum"];
      this.minimum = _data["minimum"];
      this.net_of_transfers = _data["net_of_transfers"];
    }
  }

  static fromJS(data: any): FractionalFee {
    data = typeof data === "object" ? data : {};
    let result = new FractionalFee();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount"] = this.amount ? this.amount.toJSON() : <any>undefined;
    data["collector_account_id"] = this.collector_account_id;
    data["denominating_token_id"] = this.denominating_token_id;
    data["maximum"] = this.maximum;
    data["minimum"] = this.minimum;
    data["net_of_transfers"] = this.net_of_transfers;
    return data;
  }
}

interface IFractionalFee {
  amount?: Amount;
  collector_account_id?: string | undefined;
  denominating_token_id?: string | undefined;
  maximum?: number | undefined;
  minimum?: number;
  net_of_transfers?: boolean;
}

class RoyaltyFee implements IRoyaltyFee {
  amount?: Amount2;
  collector_account_id?: string | undefined;
  fallback_fee?: Fallback_fee;

  constructor(data?: IRoyaltyFee) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount = _data["amount"]
        ? Amount2.fromJS(_data["amount"])
        : <any>undefined;
      this.collector_account_id = _data["collector_account_id"];
      this.fallback_fee = _data["fallback_fee"]
        ? Fallback_fee.fromJS(_data["fallback_fee"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): RoyaltyFee {
    data = typeof data === "object" ? data : {};
    let result = new RoyaltyFee();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount"] = this.amount ? this.amount.toJSON() : <any>undefined;
    data["collector_account_id"] = this.collector_account_id;
    data["fallback_fee"] = this.fallback_fee
      ? this.fallback_fee.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IRoyaltyFee {
  amount?: Amount2;
  collector_account_id?: string | undefined;
  fallback_fee?: Fallback_fee;
}

class Key implements IKey {
  _type?: Key_type;
  key?: string;

  constructor(data?: IKey) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this._type = _data["_type"];
      this.key = _data["key"];
    }
  }

  static fromJS(data: any): Key {
    data = typeof data === "object" ? data : {};
    let result = new Key();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["_type"] = this._type;
    data["key"] = this.key;
    return data;
  }
}

interface IKey {
  _type?: Key_type;
  key?: string;
}

class Links implements ILinks {
  next?: any | undefined;

  constructor(data?: ILinks) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.next = _data["next"];
    }
  }

  static fromJS(data: any): Links {
    data = typeof data === "object" ? data : {};
    let result = new Links();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["next"] = this.next;
    return data;
  }
}

interface ILinks {
  next?: any | undefined;
}

class NetworkNode implements INetworkNode {
  /** a memo associated with the address book */
  description?: string | undefined;
  file_id?: string | undefined;
  /** memo */
  memo?: string | undefined;
  /** An identifier for the node */
  node_id?: number;
  node_account_id?: string | undefined;
  /** hex encoded hash of the node’s TLS certificate */
  node_cert_hash?: string | undefined;
  /** hex encoded X509 RSA public key used to sign stream files */
  public_key?: string | undefined;
  service_endpoints?: ServiceEndpoint[];
  timestamp?: TimestampRange;

  constructor(data?: INetworkNode) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.description = _data["description"];
      this.file_id = _data["file_id"];
      this.memo = _data["memo"];
      this.node_id = _data["node_id"];
      this.node_account_id = _data["node_account_id"];
      this.node_cert_hash = _data["node_cert_hash"];
      this.public_key = _data["public_key"];
      if (Array.isArray(_data["service_endpoints"])) {
        this.service_endpoints = [] as any;
        for (let item of _data["service_endpoints"])
          this.service_endpoints!.push(ServiceEndpoint.fromJS(item));
      }
      this.timestamp = _data["timestamp"]
        ? TimestampRange.fromJS(_data["timestamp"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): NetworkNode {
    data = typeof data === "object" ? data : {};
    let result = new NetworkNode();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["description"] = this.description;
    data["file_id"] = this.file_id;
    data["memo"] = this.memo;
    data["node_id"] = this.node_id;
    data["node_account_id"] = this.node_account_id;
    data["node_cert_hash"] = this.node_cert_hash;
    data["public_key"] = this.public_key;
    if (Array.isArray(this.service_endpoints)) {
      data["service_endpoints"] = [];
      for (let item of this.service_endpoints)
        data["service_endpoints"].push(item.toJSON());
    }
    data["timestamp"] = this.timestamp
      ? this.timestamp.toJSON()
      : <any>undefined;
    return data;
  }
}

interface INetworkNode {
  /** a memo associated with the address book */
  description?: string | undefined;
  file_id?: string | undefined;
  /** memo */
  memo?: string | undefined;
  /** An identifier for the node */
  node_id?: number;
  node_account_id?: string | undefined;
  /** hex encoded hash of the node’s TLS certificate */
  node_cert_hash?: string | undefined;
  /** hex encoded X509 RSA public key used to sign stream files */
  public_key?: string | undefined;
  service_endpoints?: ServiceEndpoint[];
  timestamp?: TimestampRange;
}

class NetworkFee implements INetworkFee {
  /** gas cost in tinybars */
  gas?: number;
  /** type of the transaction */
  transaction_type?: string;

  constructor(data?: INetworkFee) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.gas = _data["gas"];
      this.transaction_type = _data["transaction_type"];
    }
  }

  static fromJS(data: any): NetworkFee {
    data = typeof data === "object" ? data : {};
    let result = new NetworkFee();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["gas"] = this.gas;
    data["transaction_type"] = this.transaction_type;
    return data;
  }
}

interface INetworkFee {
  /** gas cost in tinybars */
  gas?: number;
  /** type of the transaction */
  transaction_type?: string;
}

class Nft implements INft {
  account_id?: string | undefined;
  created_timestamp?: string | undefined;
  delegating_spender?: string | undefined;
  /** whether the nft or the token it belongs to has been deleted */
  deleted?: boolean;
  /** base64 encoded binary data */
  metadata?: string;
  modified_timestamp?: string | undefined;
  serial_number?: number;
  spender?: string | undefined;
  token_id?: string | undefined;

  constructor(data?: INft) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.account_id = _data["account_id"];
      this.created_timestamp = _data["created_timestamp"];
      this.delegating_spender = _data["delegating_spender"];
      this.deleted = _data["deleted"];
      this.metadata = _data["metadata"];
      this.modified_timestamp = _data["modified_timestamp"];
      this.serial_number = _data["serial_number"];
      this.spender = _data["spender"];
      this.token_id = _data["token_id"];
    }
  }

  static fromJS(data: any): Nft {
    data = typeof data === "object" ? data : {};
    let result = new Nft();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["account_id"] = this.account_id;
    data["created_timestamp"] = this.created_timestamp;
    data["delegating_spender"] = this.delegating_spender;
    data["deleted"] = this.deleted;
    data["metadata"] = this.metadata;
    data["modified_timestamp"] = this.modified_timestamp;
    data["serial_number"] = this.serial_number;
    data["spender"] = this.spender;
    data["token_id"] = this.token_id;
    return data;
  }
}

interface INft {
  account_id?: string | undefined;
  created_timestamp?: string | undefined;
  delegating_spender?: string | undefined;
  /** whether the nft or the token it belongs to has been deleted */
  deleted?: boolean;
  /** base64 encoded binary data */
  metadata?: string;
  modified_timestamp?: string | undefined;
  serial_number?: number;
  spender?: string | undefined;
  token_id?: string | undefined;
}

class Nfts implements INfts {
  nfts?: Nft[];
  links?: Links;

  constructor(data?: INfts) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["nfts"])) {
        this.nfts = [] as any;
        for (let item of _data["nfts"]) this.nfts!.push(Nft.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): Nfts {
    data = typeof data === "object" ? data : {};
    let result = new Nfts();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.nfts)) {
      data["nfts"] = [];
      for (let item of this.nfts) data["nfts"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface INfts {
  nfts?: Nft[];
  links?: Links;
}

class NftTransactionTransfer implements INftTransactionTransfer {
  consensus_timestamp?: string;
  is_approval?: boolean;
  nonce?: number;
  transaction_id?: string;
  receiver_account_id?: string | undefined;
  sender_account_id?: string | undefined;
  type?: TransactionTypes;
  token_id?: string | undefined;

  constructor(data?: INftTransactionTransfer) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.consensus_timestamp = _data["consensus_timestamp"];
      this.is_approval = _data["is_approval"];
      this.nonce = _data["nonce"];
      this.transaction_id = _data["transaction_id"];
      this.receiver_account_id = _data["receiver_account_id"];
      this.sender_account_id = _data["sender_account_id"];
      this.type = _data["type"];
      this.token_id = _data["token_id"];
    }
  }

  static fromJS(data: any): NftTransactionTransfer {
    data = typeof data === "object" ? data : {};
    let result = new NftTransactionTransfer();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["consensus_timestamp"] = this.consensus_timestamp;
    data["is_approval"] = this.is_approval;
    data["nonce"] = this.nonce;
    data["transaction_id"] = this.transaction_id;
    data["receiver_account_id"] = this.receiver_account_id;
    data["sender_account_id"] = this.sender_account_id;
    data["type"] = this.type;
    data["token_id"] = this.token_id;
    return data;
  }
}

interface INftTransactionTransfer {
  consensus_timestamp?: string;
  is_approval?: boolean;
  nonce?: number;
  transaction_id?: string;
  receiver_account_id?: string | undefined;
  sender_account_id?: string | undefined;
  type?: TransactionTypes;
  token_id?: string | undefined;
}

class Block implements IBlock {
  count?: number;
  gas_used?: number | undefined;
  hapi_version?: string;
  hash?: string;
  /** A hex encoded 256-byte array with 0x prefix */
  logs_bloom?: string | undefined;
  name?: string;
  number?: number;
  previous_hash?: string;
  size?: number | undefined;
  timestamp?: Timestamp2;

  constructor(data?: IBlock) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.count = _data["count"];
      this.gas_used = _data["gas_used"];
      this.hapi_version = _data["hapi_version"];
      this.hash = _data["hash"];
      this.logs_bloom = _data["logs_bloom"];
      this.name = _data["name"];
      this.number = _data["number"];
      this.previous_hash = _data["previous_hash"];
      this.size = _data["size"];
      this.timestamp = _data["timestamp"]
        ? Timestamp2.fromJS(_data["timestamp"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): Block {
    data = typeof data === "object" ? data : {};
    let result = new Block();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["count"] = this.count;
    data["gas_used"] = this.gas_used;
    data["hapi_version"] = this.hapi_version;
    data["hash"] = this.hash;
    data["logs_bloom"] = this.logs_bloom;
    data["name"] = this.name;
    data["number"] = this.number;
    data["previous_hash"] = this.previous_hash;
    data["size"] = this.size;
    data["timestamp"] = this.timestamp
      ? this.timestamp.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IBlock {
  count?: number;
  gas_used?: number | undefined;
  hapi_version?: string;
  hash?: string;
  /** A hex encoded 256-byte array with 0x prefix */
  logs_bloom?: string | undefined;
  name?: string;
  number?: number;
  previous_hash?: string;
  size?: number | undefined;
  timestamp?: Timestamp2;
}

class NftTransactionHistory implements INftTransactionHistory {
  transactions?: NftTransactionTransfer[];
  links?: Links;

  constructor(data?: INftTransactionHistory) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["transactions"])) {
        this.transactions = [] as any;
        for (let item of _data["transactions"])
          this.transactions!.push(NftTransactionTransfer.fromJS(item));
      }
      this.links = _data["links"]
        ? Links.fromJS(_data["links"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): NftTransactionHistory {
    data = typeof data === "object" ? data : {};
    let result = new NftTransactionHistory();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.transactions)) {
      data["transactions"] = [];
      for (let item of this.transactions)
        data["transactions"].push(item.toJSON());
    }
    data["links"] = this.links ? this.links.toJSON() : <any>undefined;
    return data;
  }
}

interface INftTransactionHistory {
  transactions?: NftTransactionTransfer[];
  links?: Links;
}

class Schedule implements ISchedule {
  admin_key?: Key | undefined;
  consensus_timestamp?: string;
  creator_account_id?: string | undefined;
  deleted?: boolean;
  executed_timestamp?: string | undefined;
  expiration_time?: string | undefined;
  memo?: string;
  payer_account_id?: string | undefined;
  schedule_id?: string | undefined;
  signatures?: ScheduleSignature[];
  transaction_body?: string;
  wait_for_expiry?: boolean;

  constructor(data?: ISchedule) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.admin_key = _data["admin_key"]
        ? Key.fromJS(_data["admin_key"])
        : <any>undefined;
      this.consensus_timestamp = _data["consensus_timestamp"];
      this.creator_account_id = _data["creator_account_id"];
      this.deleted = _data["deleted"];
      this.executed_timestamp = _data["executed_timestamp"];
      this.expiration_time = _data["expiration_time"];
      this.memo = _data["memo"];
      this.payer_account_id = _data["payer_account_id"];
      this.schedule_id = _data["schedule_id"];
      if (Array.isArray(_data["signatures"])) {
        this.signatures = [] as any;
        for (let item of _data["signatures"])
          this.signatures!.push(ScheduleSignature.fromJS(item));
      }
      this.transaction_body = _data["transaction_body"];
      this.wait_for_expiry = _data["wait_for_expiry"];
    }
  }

  static fromJS(data: any): Schedule {
    data = typeof data === "object" ? data : {};
    let result = new Schedule();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["admin_key"] = this.admin_key
      ? this.admin_key.toJSON()
      : <any>undefined;
    data["consensus_timestamp"] = this.consensus_timestamp;
    data["creator_account_id"] = this.creator_account_id;
    data["deleted"] = this.deleted;
    data["executed_timestamp"] = this.executed_timestamp;
    data["expiration_time"] = this.expiration_time;
    data["memo"] = this.memo;
    data["payer_account_id"] = this.payer_account_id;
    data["schedule_id"] = this.schedule_id;
    if (Array.isArray(this.signatures)) {
      data["signatures"] = [];
      for (let item of this.signatures) data["signatures"].push(item.toJSON());
    }
    data["transaction_body"] = this.transaction_body;
    data["wait_for_expiry"] = this.wait_for_expiry;
    return data;
  }
}

interface ISchedule {
  admin_key?: Key | undefined;
  consensus_timestamp?: string;
  creator_account_id?: string | undefined;
  deleted?: boolean;
  executed_timestamp?: string | undefined;
  expiration_time?: string | undefined;
  memo?: string;
  payer_account_id?: string | undefined;
  schedule_id?: string | undefined;
  signatures?: ScheduleSignature[];
  transaction_body?: string;
  wait_for_expiry?: boolean;
}

class ScheduleSignature implements IScheduleSignature {
  consensus_timestmap?: string;
  public_key_prefix?: string;
  signature?: string;
  type?: ScheduleSignatureType;

  constructor(data?: IScheduleSignature) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.consensus_timestmap = _data["consensus_timestmap"];
      this.public_key_prefix = _data["public_key_prefix"];
      this.signature = _data["signature"];
      this.type = _data["type"];
    }
  }

  static fromJS(data: any): ScheduleSignature {
    data = typeof data === "object" ? data : {};
    let result = new ScheduleSignature();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["consensus_timestmap"] = this.consensus_timestmap;
    data["public_key_prefix"] = this.public_key_prefix;
    data["signature"] = this.signature;
    data["type"] = this.type;
    return data;
  }
}

interface IScheduleSignature {
  consensus_timestmap?: string;
  public_key_prefix?: string;
  signature?: string;
  type?: ScheduleSignatureType;
}

class ServiceEndpoint implements IServiceEndpoint {
  ip_address_v4!: string;
  port!: number;

  constructor(data?: IServiceEndpoint) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.ip_address_v4 = _data["ip_address_v4"];
      this.port = _data["port"];
    }
  }

  static fromJS(data: any): ServiceEndpoint {
    data = typeof data === "object" ? data : {};
    let result = new ServiceEndpoint();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["ip_address_v4"] = this.ip_address_v4;
    data["port"] = this.port;
    return data;
  }
}

interface IServiceEndpoint {
  ip_address_v4: string;
  port: number;
}

class StateProofFiles implements IStateProofFiles {
  record_file?: string;
  address_books?: string[];
  signature_files?: Signature_files;

  constructor(data?: IStateProofFiles) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.record_file = _data["record_file"];
      if (Array.isArray(_data["address_books"])) {
        this.address_books = [] as any;
        for (let item of _data["address_books"]) this.address_books!.push(item);
      }
      this.signature_files = _data["signature_files"]
        ? Signature_files.fromJS(_data["signature_files"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): StateProofFiles {
    data = typeof data === "object" ? data : {};
    let result = new StateProofFiles();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["record_file"] = this.record_file;
    if (Array.isArray(this.address_books)) {
      data["address_books"] = [];
      for (let item of this.address_books) data["address_books"].push(item);
    }
    data["signature_files"] = this.signature_files
      ? this.signature_files.toJSON()
      : <any>undefined;
    return data;
  }
}

interface IStateProofFiles {
  record_file?: string;
  address_books?: string[];
  signature_files?: Signature_files;
}

/** A timestamp range an entity is valid for */
class TimestampRange implements ITimestampRange {
  from?: From;
  to?: To;

  constructor(data?: ITimestampRange) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.from = _data["from"];
      this.to = _data["to"];
    }
  }

  static fromJS(data: any): TimestampRange {
    data = typeof data === "object" ? data : {};
    let result = new TimestampRange();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["from"] = this.from;
    data["to"] = this.to;
    return data;
  }
}

/** A timestamp range an entity is valid for */
interface ITimestampRange {
  from?: From;
  to?: To;
}

class Token implements IToken {
  token_id!: string | undefined;
  symbol!: string;
  admin_key!: Key | undefined;
  type!: string;

  constructor(data?: IToken) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.token_id = _data["token_id"];
      this.symbol = _data["symbol"];
      this.admin_key = _data["admin_key"]
        ? Key.fromJS(_data["admin_key"])
        : <any>undefined;
      this.type = _data["type"];
    }
  }

  static fromJS(data: any): Token {
    data = typeof data === "object" ? data : {};
    let result = new Token();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["token_id"] = this.token_id;
    data["symbol"] = this.symbol;
    data["admin_key"] = this.admin_key
      ? this.admin_key.toJSON()
      : <any>undefined;
    data["type"] = this.type;
    return data;
  }
}

interface IToken {
  token_id: string | undefined;
  symbol: string;
  admin_key: Key | undefined;
  type: string;
}

class TokenAllowance extends Allowance implements ITokenAllowance {
  token_id?: string | undefined;

  constructor(data?: ITokenAllowance) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      this.token_id = _data["token_id"];
    }
  }

  static fromJS(data: any): TokenAllowance {
    data = typeof data === "object" ? data : {};
    let result = new TokenAllowance();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["token_id"] = this.token_id;
    super.toJSON(data);
    return data;
  }
}

interface ITokenAllowance extends IAllowance {
  token_id?: string | undefined;
}

class TokenBalance implements ITokenBalance {
  token_id!: string | undefined;
  balance!: number;

  constructor(data?: ITokenBalance) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.token_id = _data["token_id"];
      this.balance = _data["balance"];
    }
  }

  static fromJS(data: any): TokenBalance {
    data = typeof data === "object" ? data : {};
    let result = new TokenBalance();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["token_id"] = this.token_id;
    data["balance"] = this.balance;
    return data;
  }
}

interface ITokenBalance {
  token_id: string | undefined;
  balance: number;
}

class TokenInfo implements ITokenInfo {
  admin_key?: Key | undefined;
  auto_renew_account?: string | undefined;
  auto_renew_period?: any | undefined;
  created_timestamp?: string;
  decimals?: string;
  deleted?: boolean | undefined;
  expiry_timestamp?: string | undefined;
  fee_schedule_key?: Key | undefined;
  freeze_default?: boolean;
  freeze_key?: Key | undefined;
  initial_supply?: string;
  kyc_key?: Key | undefined;
  max_supply?: string;
  modified_timestamp?: string;
  name?: string;
  memo?: string;
  pause_key?: Key | undefined;
  pause_status?: TokenInfoPause_status;
  supply_key?: Key | undefined;
  supply_type?: TokenInfoSupply_type;
  symbol?: string;
  token_id?: string | undefined;
  total_supply?: string;
  treasury_account_id?: string | undefined;
  type?: TokenInfoType;
  wipe_key?: Key | undefined;
  custom_fees?: CustomFees;

  constructor(data?: ITokenInfo) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.admin_key = _data["admin_key"]
        ? Key.fromJS(_data["admin_key"])
        : <any>undefined;
      this.auto_renew_account = _data["auto_renew_account"];
      this.auto_renew_period = _data["auto_renew_period"];
      this.created_timestamp = _data["created_timestamp"];
      this.decimals = _data["decimals"];
      this.deleted = _data["deleted"];
      this.expiry_timestamp = _data["expiry_timestamp"];
      this.fee_schedule_key = _data["fee_schedule_key"]
        ? Key.fromJS(_data["fee_schedule_key"])
        : <any>undefined;
      this.freeze_default = _data["freeze_default"];
      this.freeze_key = _data["freeze_key"]
        ? Key.fromJS(_data["freeze_key"])
        : <any>undefined;
      this.initial_supply = _data["initial_supply"];
      this.kyc_key = _data["kyc_key"]
        ? Key.fromJS(_data["kyc_key"])
        : <any>undefined;
      this.max_supply = _data["max_supply"];
      this.modified_timestamp = _data["modified_timestamp"];
      this.name = _data["name"];
      this.memo = _data["memo"];
      this.pause_key = _data["pause_key"]
        ? Key.fromJS(_data["pause_key"])
        : <any>undefined;
      this.pause_status = _data["pause_status"];
      this.supply_key = _data["supply_key"]
        ? Key.fromJS(_data["supply_key"])
        : <any>undefined;
      this.supply_type = _data["supply_type"];
      this.symbol = _data["symbol"];
      this.token_id = _data["token_id"];
      this.total_supply = _data["total_supply"];
      this.treasury_account_id = _data["treasury_account_id"];
      this.type = _data["type"];
      this.wipe_key = _data["wipe_key"]
        ? Key.fromJS(_data["wipe_key"])
        : <any>undefined;
      this.custom_fees = _data["custom_fees"]
        ? CustomFees.fromJS(_data["custom_fees"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): TokenInfo {
    data = typeof data === "object" ? data : {};
    let result = new TokenInfo();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["admin_key"] = this.admin_key
      ? this.admin_key.toJSON()
      : <any>undefined;
    data["auto_renew_account"] = this.auto_renew_account;
    data["auto_renew_period"] = this.auto_renew_period;
    data["created_timestamp"] = this.created_timestamp;
    data["decimals"] = this.decimals;
    data["deleted"] = this.deleted;
    data["expiry_timestamp"] = this.expiry_timestamp;
    data["fee_schedule_key"] = this.fee_schedule_key
      ? this.fee_schedule_key.toJSON()
      : <any>undefined;
    data["freeze_default"] = this.freeze_default;
    data["freeze_key"] = this.freeze_key
      ? this.freeze_key.toJSON()
      : <any>undefined;
    data["initial_supply"] = this.initial_supply;
    data["kyc_key"] = this.kyc_key ? this.kyc_key.toJSON() : <any>undefined;
    data["max_supply"] = this.max_supply;
    data["modified_timestamp"] = this.modified_timestamp;
    data["name"] = this.name;
    data["memo"] = this.memo;
    data["pause_key"] = this.pause_key
      ? this.pause_key.toJSON()
      : <any>undefined;
    data["pause_status"] = this.pause_status;
    data["supply_key"] = this.supply_key
      ? this.supply_key.toJSON()
      : <any>undefined;
    data["supply_type"] = this.supply_type;
    data["symbol"] = this.symbol;
    data["token_id"] = this.token_id;
    data["total_supply"] = this.total_supply;
    data["treasury_account_id"] = this.treasury_account_id;
    data["type"] = this.type;
    data["wipe_key"] = this.wipe_key ? this.wipe_key.toJSON() : <any>undefined;
    data["custom_fees"] = this.custom_fees
      ? this.custom_fees.toJSON()
      : <any>undefined;
    return data;
  }
}

interface ITokenInfo {
  admin_key?: Key | undefined;
  auto_renew_account?: string | undefined;
  auto_renew_period?: any | undefined;
  created_timestamp?: string;
  decimals?: string;
  deleted?: boolean | undefined;
  expiry_timestamp?: string | undefined;
  fee_schedule_key?: Key | undefined;
  freeze_default?: boolean;
  freeze_key?: Key | undefined;
  initial_supply?: string;
  kyc_key?: Key | undefined;
  max_supply?: string;
  modified_timestamp?: string;
  name?: string;
  memo?: string;
  pause_key?: Key | undefined;
  pause_status?: TokenInfoPause_status;
  supply_key?: Key | undefined;
  supply_type?: TokenInfoSupply_type;
  symbol?: string;
  token_id?: string | undefined;
  total_supply?: string;
  treasury_account_id?: string | undefined;
  type?: TokenInfoType;
  wipe_key?: Key | undefined;
  custom_fees?: CustomFees;
}

enum TransactionTypes {
  CONSENSUSCREATETOPIC = "CONSENSUSCREATETOPIC",
  CONSENSUSDELETETOPIC = "CONSENSUSDELETETOPIC",
  CONSENSUSSUBMITMESSAGE = "CONSENSUSSUBMITMESSAGE",
  CONSENSUSUPDATETOPIC = "CONSENSUSUPDATETOPIC",
  CONTRACTCALL = "CONTRACTCALL",
  CONTRACTCREATEINSTANCE = "CONTRACTCREATEINSTANCE",
  CONTRACTDELETEINSTANCE = "CONTRACTDELETEINSTANCE",
  CONTRACTUPDATEINSTANCE = "CONTRACTUPDATEINSTANCE",
  CRYPTOADDLIVEHASH = "CRYPTOADDLIVEHASH",
  CRYPTOAPPROVEALLOWANCE = "CRYPTOAPPROVEALLOWANCE",
  CRYPTOCREATEACCOUNT = "CRYPTOCREATEACCOUNT",
  CRYPTODELETE = "CRYPTODELETE",
  CRYPTODELETEALLOWANCE = "CRYPTODELETEALLOWANCE",
  CRYPTODELETELIVEHASH = "CRYPTODELETELIVEHASH",
  CRYPTOTRANSFER = "CRYPTOTRANSFER",
  CRYPTOUPDATEACCOUNT = "CRYPTOUPDATEACCOUNT",
  ETHEREUMTRANSACTION = "ETHEREUMTRANSACTION",
  FILEAPPEND = "FILEAPPEND",
  FILECREATE = "FILECREATE",
  FILEDELETE = "FILEDELETE",
  FILEUPDATE = "FILEUPDATE",
  FREEZE = "FREEZE",
  NODESTAKEUPDATE = "NODESTAKEUPDATE",
  SCHEDULECREATE = "SCHEDULECREATE",
  SCHEDULEDELETE = "SCHEDULEDELETE",
  SCHEDULESIGN = "SCHEDULESIGN",
  SYSTEMDELETE = "SYSTEMDELETE",
  SYSTEMUNDELETE = "SYSTEMUNDELETE",
  TOKENASSOCIATE = "TOKENASSOCIATE",
  TOKENBURN = "TOKENBURN",
  TOKENCREATION = "TOKENCREATION",
  TOKENDELETION = "TOKENDELETION",
  TOKENDISSOCIATE = "TOKENDISSOCIATE",
  TOKENFEESCHEDULEUPDATE = "TOKENFEESCHEDULEUPDATE",
  TOKENFREEZE = "TOKENFREEZE",
  TOKENGRANTKYC = "TOKENGRANTKYC",
  TOKENMINT = "TOKENMINT",
  TOKENPAUSE = "TOKENPAUSE",
  TOKENREVOKEKYC = "TOKENREVOKEKYC",
  TOKENUNFREEZE = "TOKENUNFREEZE",
  TOKENUNPAUSE = "TOKENUNPAUSE",
  TOKENUPDATE = "TOKENUPDATE",
  TOKENWIPE = "TOKENWIPE",
  UNCHECKEDSUBMIT = "UNCHECKEDSUBMIT"
}

class TopicMessage implements ITopicMessage {
  chunk_info?: ChunkInfo | undefined;
  consensus_timestamp!: string;
  message!: string;
  payer_account_id!: string | undefined;
  running_hash!: string;
  running_hash_version!: number;
  sequence_number!: number;
  topic_id!: string | undefined;

  constructor(data?: ITopicMessage) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.chunk_info = _data["chunk_info"]
        ? ChunkInfo.fromJS(_data["chunk_info"])
        : <any>undefined;
      this.consensus_timestamp = _data["consensus_timestamp"];
      this.message = _data["message"];
      this.payer_account_id = _data["payer_account_id"];
      this.running_hash = _data["running_hash"];
      this.running_hash_version = _data["running_hash_version"];
      this.sequence_number = _data["sequence_number"];
      this.topic_id = _data["topic_id"];
    }
  }

  static fromJS(data: any): TopicMessage {
    data = typeof data === "object" ? data : {};
    let result = new TopicMessage();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["chunk_info"] = this.chunk_info
      ? this.chunk_info.toJSON()
      : <any>undefined;
    data["consensus_timestamp"] = this.consensus_timestamp;
    data["message"] = this.message;
    data["payer_account_id"] = this.payer_account_id;
    data["running_hash"] = this.running_hash;
    data["running_hash_version"] = this.running_hash_version;
    data["sequence_number"] = this.sequence_number;
    data["topic_id"] = this.topic_id;
    return data;
  }
}

interface ITopicMessage {
  chunk_info?: ChunkInfo | undefined;
  consensus_timestamp: string;
  message: string;
  payer_account_id: string | undefined;
  running_hash: string;
  running_hash_version: number;
  sequence_number: number;
  topic_id: string | undefined;
}

class Transaction implements ITransaction {
  bytes?: string | undefined;
  charged_tx_fee?: number;
  consensus_timestamp?: string;
  entity_id?: string | undefined;
  max_fee?: string;
  memo_base64?: any | undefined;
  name?: TransactionTypes;
  node?: string | undefined;
  nonce?: number;
  parent_consensus_timestamp?: string | undefined;
  result?: string;
  scheduled?: boolean;
  token_transfers?: Token_transfers[];
  transaction_hash?: string;
  transaction_id?: string;
  transfers?: Transfers[];
  valid_duration_seconds?: string;
  valid_start_timestamp?: string;

  constructor(data?: ITransaction) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.bytes = _data["bytes"];
      this.charged_tx_fee = _data["charged_tx_fee"];
      this.consensus_timestamp = _data["consensus_timestamp"];
      this.entity_id = _data["entity_id"];
      this.max_fee = _data["max_fee"];
      this.memo_base64 = _data["memo_base64"];
      this.name = _data["name"];
      this.node = _data["node"];
      this.nonce = _data["nonce"];
      this.parent_consensus_timestamp = _data["parent_consensus_timestamp"];
      this.result = _data["result"];
      this.scheduled = _data["scheduled"];
      if (Array.isArray(_data["token_transfers"])) {
        this.token_transfers = [] as any;
        for (let item of _data["token_transfers"])
          this.token_transfers!.push(Token_transfers.fromJS(item));
      }
      this.transaction_hash = _data["transaction_hash"];
      this.transaction_id = _data["transaction_id"];
      if (Array.isArray(_data["transfers"])) {
        this.transfers = [] as any;
        for (let item of _data["transfers"])
          this.transfers!.push(Transfers.fromJS(item));
      }
      this.valid_duration_seconds = _data["valid_duration_seconds"];
      this.valid_start_timestamp = _data["valid_start_timestamp"];
    }
  }

  static fromJS(data: any): Transaction {
    data = typeof data === "object" ? data : {};
    let result = new Transaction();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["bytes"] = this.bytes;
    data["charged_tx_fee"] = this.charged_tx_fee;
    data["consensus_timestamp"] = this.consensus_timestamp;
    data["entity_id"] = this.entity_id;
    data["max_fee"] = this.max_fee;
    data["memo_base64"] = this.memo_base64;
    data["name"] = this.name;
    data["node"] = this.node;
    data["nonce"] = this.nonce;
    data["parent_consensus_timestamp"] = this.parent_consensus_timestamp;
    data["result"] = this.result;
    data["scheduled"] = this.scheduled;
    if (Array.isArray(this.token_transfers)) {
      data["token_transfers"] = [];
      for (let item of this.token_transfers)
        data["token_transfers"].push(item.toJSON());
    }
    data["transaction_hash"] = this.transaction_hash;
    data["transaction_id"] = this.transaction_id;
    if (Array.isArray(this.transfers)) {
      data["transfers"] = [];
      for (let item of this.transfers) data["transfers"].push(item.toJSON());
    }
    data["valid_duration_seconds"] = this.valid_duration_seconds;
    data["valid_start_timestamp"] = this.valid_start_timestamp;
    return data;
  }
}

interface ITransaction {
  bytes?: string | undefined;
  charged_tx_fee?: number;
  consensus_timestamp?: string;
  entity_id?: string | undefined;
  max_fee?: string;
  memo_base64?: any | undefined;
  name?: TransactionTypes;
  node?: string | undefined;
  nonce?: number;
  parent_consensus_timestamp?: string | undefined;
  result?: string;
  scheduled?: boolean;
  token_transfers?: Token_transfers[];
  transaction_hash?: string;
  transaction_id?: string;
  transfers?: Transfers[];
  valid_duration_seconds?: string;
  valid_start_timestamp?: string;
}

class TransactionDetail extends Transaction implements ITransactionDetail {
  assessed_custom_fees?: Assessed_custom_fees[];
  nft_transfers?: Nft_transfers[];

  constructor(data?: ITransactionDetail) {
    super(data);
  }

  init(_data?: any) {
    super.init(_data);
    if (_data) {
      if (Array.isArray(_data["assessed_custom_fees"])) {
        this.assessed_custom_fees = [] as any;
        for (let item of _data["assessed_custom_fees"])
          this.assessed_custom_fees!.push(Assessed_custom_fees.fromJS(item));
      }
      if (Array.isArray(_data["nft_transfers"])) {
        this.nft_transfers = [] as any;
        for (let item of _data["nft_transfers"])
          this.nft_transfers!.push(Nft_transfers.fromJS(item));
      }
    }
  }

  static fromJS(data: any): TransactionDetail {
    data = typeof data === "object" ? data : {};
    let result = new TransactionDetail();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.assessed_custom_fees)) {
      data["assessed_custom_fees"] = [];
      for (let item of this.assessed_custom_fees)
        data["assessed_custom_fees"].push(item.toJSON());
    }
    if (Array.isArray(this.nft_transfers)) {
      data["nft_transfers"] = [];
      for (let item of this.nft_transfers)
        data["nft_transfers"].push(item.toJSON());
    }
    super.toJSON(data);
    return data;
  }
}

interface ITransactionDetail extends ITransaction {
  assessed_custom_fees?: Assessed_custom_fees[];
  nft_transfers?: Nft_transfers[];
}

class TransactionId implements ITransactionId {
  account_id?: string | undefined;
  nonce?: number | undefined;
  scheduled?: boolean | undefined;
  transaction_valid_start?: string;

  constructor(data?: ITransactionId) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.account_id = _data["account_id"];
      this.nonce = _data["nonce"];
      this.scheduled = _data["scheduled"];
      this.transaction_valid_start = _data["transaction_valid_start"];
    }
  }

  static fromJS(data: any): TransactionId {
    data = typeof data === "object" ? data : {};
    let result = new TransactionId();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["account_id"] = this.account_id;
    data["nonce"] = this.nonce;
    data["scheduled"] = this.scheduled;
    data["transaction_valid_start"] = this.transaction_valid_start;
    return data;
  }
}

interface ITransactionId {
  account_id?: string | undefined;
  nonce?: number | undefined;
  scheduled?: boolean | undefined;
  transaction_valid_start?: string;
}

export enum Order {
  Asc = "asc",
  Desc = "desc"
}

enum Result {
  Success = "success",
  Fail = "fail"
}

enum Type {
  Credit = "credit",
  Debit = "debit"
}

type Timestamp = string;

interface IBalances {
  account: string | undefined;
  balance: number;
}

class Tokens implements ITokens {
  token_id?: string | undefined;
  balance?: number;

  constructor(data?: ITokens) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.token_id = _data["token_id"];
      this.balance = _data["balance"];
    }
  }

  static fromJS(data: any): Tokens {
    data = typeof data === "object" ? data : {};
    let result = new Tokens();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["token_id"] = this.token_id;
    data["balance"] = this.balance;
    return data;
  }
}

interface ITokens {
  token_id?: string | undefined;
  balance?: number;
}

type Root_contract_id = string;

type Bloom = string;

class _status implements I_status {
  messages?: Messages[];

  constructor(data?: I_status) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["messages"])) {
        this.messages = [] as any;
        for (let item of _data["messages"])
          this.messages!.push(Messages.fromJS(item));
      }
    }
  }

  static fromJS(data: any): _status {
    data = typeof data === "object" ? data : {};
    let result = new _status();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    if (Array.isArray(this.messages)) {
      data["messages"] = [];
      for (let item of this.messages) data["messages"].push(item.toJSON());
    }
    return data;
  }
}

interface I_status {
  messages?: Messages[];
}

class Amount implements IAmount {
  numerator?: number;
  denominator?: number;

  constructor(data?: IAmount) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.numerator = _data["numerator"];
      this.denominator = _data["denominator"];
    }
  }

  static fromJS(data: any): Amount {
    data = typeof data === "object" ? data : {};
    let result = new Amount();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["numerator"] = this.numerator;
    data["denominator"] = this.denominator;
    return data;
  }
}

interface IAmount {
  numerator?: number;
  denominator?: number;
}

class Amount2 implements IAmount2 {
  numerator?: number;
  denominator?: number;

  constructor(data?: IAmount2) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.numerator = _data["numerator"];
      this.denominator = _data["denominator"];
    }
  }

  static fromJS(data: any): Amount2 {
    data = typeof data === "object" ? data : {};
    let result = new Amount2();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["numerator"] = this.numerator;
    data["denominator"] = this.denominator;
    return data;
  }
}

interface IAmount2 {
  numerator?: number;
  denominator?: number;
}

class Fallback_fee implements IFallback_fee {
  amount?: number;
  denominating_token_id?: string | undefined;

  constructor(data?: IFallback_fee) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount = _data["amount"];
      this.denominating_token_id = _data["denominating_token_id"];
    }
  }

  static fromJS(data: any): Fallback_fee {
    data = typeof data === "object" ? data : {};
    let result = new Fallback_fee();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount"] = this.amount;
    data["denominating_token_id"] = this.denominating_token_id;
    return data;
  }
}

interface IFallback_fee {
  amount?: number;
  denominating_token_id?: string | undefined;
}

enum Key_type {
  ECDSA_SECP256K1 = "ECDSA_SECP256K1",
  ED25519 = "ED25519",
  ProtobufEncoded = "ProtobufEncoded"
}

class Timestamp2 implements ITimestamp2 {
  from?: TimestampRange;
  to?: TimestampRange;

  constructor(data?: ITimestamp2) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.from = _data["from"]
        ? TimestampRange.fromJS(_data["from"])
        : <any>undefined;
      this.to = _data["to"]
        ? TimestampRange.fromJS(_data["to"])
        : <any>undefined;
    }
  }

  static fromJS(data: any): Timestamp2 {
    data = typeof data === "object" ? data : {};
    let result = new Timestamp2();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["from"] = this.from ? this.from.toJSON() : <any>undefined;
    data["to"] = this.to ? this.to.toJSON() : <any>undefined;
    return data;
  }
}

interface ITimestamp2 {
  from?: TimestampRange;
  to?: TimestampRange;
}

enum ScheduleSignatureType {
  CONTRACT = "CONTRACT",
  ED25519 = "ED25519",
  RSA_3072 = "RSA_3072",
  ECDSA_384 = "ECDSA_384",
  ECDSA_SECP256K1 = "ECDSA_SECP256K1",
  UNKNOWN = "UNKNOWN"
}

class Signature_files implements ISignature_files {
  _003?: string;
  _004?: string;
  _005?: string;
  _006?: string;

  constructor(data?: ISignature_files) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this._003 = _data["0.0.3"];
      this._004 = _data["0.0.4"];
      this._005 = _data["0.0.5"];
      this._006 = _data["0.0.6"];
    }
  }

  static fromJS(data: any): Signature_files {
    data = typeof data === "object" ? data : {};
    let result = new Signature_files();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["0.0.3"] = this._003;
    data["0.0.4"] = this._004;
    data["0.0.5"] = this._005;
    data["0.0.6"] = this._006;
    return data;
  }
}

interface ISignature_files {
  _003?: string;
  _004?: string;
  _005?: string;
  _006?: string;
}

type From = string;

type To = string;

enum TokenInfoPause_status {
  NOT_APPLICABLE = "NOT_APPLICABLE",
  PAUSED = "PAUSED",
  UNPAUSED = "UNPAUSED"
}

enum TokenInfoSupply_type {
  FINITE = "FINITE",
  INFINITE = "INFINITE"
}

enum TokenInfoType {
  FUNGIBLE_COMMON = "FUNGIBLE_COMMON",
  NON_FUNGIBLE_UNIQUE = "NON_FUNGIBLE_UNIQUE"
}

class Token_transfers implements IToken_transfers {
  token_id!: string | undefined;
  account!: string | undefined;
  amount!: number;
  is_approval?: boolean;

  constructor(data?: IToken_transfers) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.token_id = _data["token_id"];
      this.account = _data["account"];
      this.amount = _data["amount"];
      this.is_approval = _data["is_approval"];
    }
  }

  static fromJS(data: any): Token_transfers {
    data = typeof data === "object" ? data : {};
    let result = new Token_transfers();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["token_id"] = this.token_id;
    data["account"] = this.account;
    data["amount"] = this.amount;
    data["is_approval"] = this.is_approval;
    return data;
  }
}

interface IToken_transfers {
  token_id: string | undefined;
  account: string | undefined;
  amount: number;
  is_approval?: boolean;
}

class Transfers implements ITransfers {
  account!: string | undefined;
  amount!: number;
  is_approval?: boolean;

  constructor(data?: ITransfers) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.account = _data["account"];
      this.amount = _data["amount"];
      this.is_approval = _data["is_approval"];
    }
  }

  static fromJS(data: any): Transfers {
    data = typeof data === "object" ? data : {};
    let result = new Transfers();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["account"] = this.account;
    data["amount"] = this.amount;
    data["is_approval"] = this.is_approval;
    return data;
  }
}

interface ITransfers {
  account: string | undefined;
  amount: number;
  is_approval?: boolean;
}

class Assessed_custom_fees implements IAssessed_custom_fees {
  amount?: number;
  collector_account_id?: string | undefined;
  effective_payer_account_ids?: (string | undefined)[];
  token_id?: string | undefined;

  constructor(data?: IAssessed_custom_fees) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.amount = _data["amount"];
      this.collector_account_id = _data["collector_account_id"];
      if (Array.isArray(_data["effective_payer_account_ids"])) {
        this.effective_payer_account_ids = [] as any;
        for (let item of _data["effective_payer_account_ids"])
          this.effective_payer_account_ids!.push(item);
      }
      this.token_id = _data["token_id"];
    }
  }

  static fromJS(data: any): Assessed_custom_fees {
    data = typeof data === "object" ? data : {};
    let result = new Assessed_custom_fees();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["amount"] = this.amount;
    data["collector_account_id"] = this.collector_account_id;
    if (Array.isArray(this.effective_payer_account_ids)) {
      data["effective_payer_account_ids"] = [];
      for (let item of this.effective_payer_account_ids)
        data["effective_payer_account_ids"].push(item);
    }
    data["token_id"] = this.token_id;
    return data;
  }
}

interface IAssessed_custom_fees {
  amount?: number;
  collector_account_id?: string | undefined;
  effective_payer_account_ids?: (string | undefined)[];
  token_id?: string | undefined;
}

class Nft_transfers implements INft_transfers {
  is_approval?: boolean;
  receiver_account_id?: string | undefined;
  sender_account_id?: string | undefined;
  serial_number!: number;
  token_id!: string | undefined;

  constructor(data?: INft_transfers) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.is_approval = _data["is_approval"];
      this.receiver_account_id = _data["receiver_account_id"];
      this.sender_account_id = _data["sender_account_id"];
      this.serial_number = _data["serial_number"];
      this.token_id = _data["token_id"];
    }
  }

  static fromJS(data: any): Nft_transfers {
    data = typeof data === "object" ? data : {};
    let result = new Nft_transfers();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["is_approval"] = this.is_approval;
    data["receiver_account_id"] = this.receiver_account_id;
    data["sender_account_id"] = this.sender_account_id;
    data["serial_number"] = this.serial_number;
    data["token_id"] = this.token_id;
    return data;
  }
}

interface INft_transfers {
  is_approval?: boolean;
  receiver_account_id?: string | undefined;
  sender_account_id?: string | undefined;
  serial_number: number;
  token_id: string | undefined;
}

class Messages implements IMessages {
  message?: string;

  constructor(data?: IMessages) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.message = _data["message"];
    }
  }

  static fromJS(data: any): Messages {
    data = typeof data === "object" ? data : {};
    let result = new Messages();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === "object" ? data : {};
    data["message"] = this.message;
    return data;
  }
}

interface IMessages {
  message?: string;
}

class SwaggerResponse<TResult> {
  status: number;
  headers: { [key: string]: any };
  result: TResult;

  constructor(
    status: number,
    headers: { [key: string]: any },
    result: TResult
  ) {
    this.status = status;
    this.headers = headers;
    this.result = result;
  }
}

class SwaggerException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is SwaggerException {
    return obj.isSwaggerException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new SwaggerException(message, status, response, headers, null);
}

export class HederaMirrorNodeAPIClient {
  baseUrl: string;
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;

  constructor() {
    this.baseUrl = "https://mainnet-public.mirrornode.hedera.com";
  }

  /**
   * List topic messages by id
   * @param topicId Topic id
   * @param sequencenumber (optional)
   * @param timestamp (optional) The consensus timestamp in seconds.nanoseconds format with an optional comparison operator
   * @param encoding (optional)
   * @param limit (optional) The maximum number of items to return
   * @param order (optional) The order in which items are listed
   * @return OK
   */
  listTopicMessagesById(
    topicId: string | null,
    sequencenumber: number | undefined,
    timestamp: string[] | undefined,
    encoding: string | undefined,
    limit: number | undefined,
    order: Order | undefined
  ): Promise<SwaggerResponse<TopicMessagesResponse>> {
    let url_ = this.baseUrl + "/api/v1/topics/{topicId}/messages?";
    if (topicId === undefined || topicId === null)
      throw new Error("The parameter 'topicId' must be defined.");
    url_ = url_.replace("{topicId}", encodeURIComponent("" + topicId));
    if (sequencenumber === null)
      throw new Error("The parameter 'sequencenumber' cannot be null.");
    else if (sequencenumber !== undefined)
      url_ += "sequencenumber=" + encodeURIComponent("" + sequencenumber) + "&";
    if (timestamp === null)
      throw new Error("The parameter 'timestamp' cannot be null.");
    else if (timestamp !== undefined)
      timestamp &&
        timestamp.forEach((item) => {
          url_ += "timestamp=" + encodeURIComponent("" + item) + "&";
        });
    if (encoding === null)
      throw new Error("The parameter 'encoding' cannot be null.");
    else if (encoding !== undefined)
      url_ += "encoding=" + encodeURIComponent("" + encoding) + "&";
    if (limit === null)
      throw new Error("The parameter 'limit' cannot be null.");
    else if (limit !== undefined)
      url_ += "limit=" + encodeURIComponent("" + limit) + "&";
    if (order === null)
      throw new Error("The parameter 'order' cannot be null.");
    else if (order !== undefined)
      url_ += "order=" + encodeURIComponent("" + order) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    };

    return fetch(url_, options_).then((_response: Response) => {
      return this.processListTopicMessagesById(_response);
    });
  }

  protected processListTopicMessagesById(
    response: Response
  ): Promise<SwaggerResponse<TopicMessagesResponse>> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = TopicMessagesResponse.fromJS(resultData200);
        return new SwaggerResponse(status, _headers, result200);
      });
    } else if (status === 400) {
      return response.text().then((_responseText) => {
        let result400: any = null;
        let resultData400 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result400 = ErrorDto.fromJS(resultData400);
        return throwException(
          "Invalid parameter",
          status,
          _responseText,
          _headers,
          result400
        );
      });
    } else if (status === 404) {
      return response.text().then((_responseText) => {
        let result404: any = null;
        let resultData404 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result404 = ErrorDto.fromJS(resultData404);
        return throwException(
          "Topic Not Found",
          status,
          _responseText,
          _headers,
          result404
        );
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<SwaggerResponse<TopicMessagesResponse>>(
      new SwaggerResponse(status, _headers, null as any)
    );
  }

  /**
   * List nfts
   * @param tokenId Token id
   * @param account_id (optional) The ID of the account to return information for
   * @param limit (optional) The maximum number of items to return
   * @param order (optional) The order in which items are listed
   * @return OK
   */
  listNfts(
    tokenId: string | null,
    account_id: string | undefined,
    limit: number | undefined,
    order: Order | undefined
  ): Promise<SwaggerResponse<Nfts>> {
    let url_ = this.baseUrl + "/api/v1/tokens/{tokenId}/nfts?";
    if (tokenId === undefined || tokenId === null)
      throw new Error("The parameter 'tokenId' must be defined.");
    url_ = url_.replace("{tokenId}", encodeURIComponent("" + tokenId));
    if (account_id === null)
      throw new Error("The parameter 'account_id' cannot be null.");
    else if (account_id !== undefined)
      url_ += "account.id=" + encodeURIComponent("" + account_id) + "&";
    if (limit === null)
      throw new Error("The parameter 'limit' cannot be null.");
    else if (limit !== undefined)
      url_ += "limit=" + encodeURIComponent("" + limit) + "&";
    if (order === null)
      throw new Error("The parameter 'order' cannot be null.");
    else if (order !== undefined)
      url_ += "order=" + encodeURIComponent("" + order) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    };

    return fetch(url_, options_).then((_response: Response) => {
      return this.processListNfts(_response);
    });
  }

  processListNfts(response: Response): Promise<SwaggerResponse<Nfts>> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
      response.headers.forEach((v: any, k: any) => (_headers[k] = v));
    }
    if (status === 200) {
      return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = Nfts.fromJS(resultData200);
        return new SwaggerResponse(status, _headers, result200);
      });
    } else if (status === 400) {
      return response.text().then((_responseText) => {
        let result400: any = null;
        let resultData400 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result400 = ErrorDto.fromJS(resultData400);
        return throwException(
          "Invalid parameter",
          status,
          _responseText,
          _headers,
          result400
        );
      });
    } else if (status === 404) {
      return response.text().then((_responseText) => {
        let result404: any = null;
        let resultData404 =
          _responseText === ""
            ? null
            : JSON.parse(_responseText, this.jsonParseReviver);
        result404 = ErrorDto.fromJS(resultData404);
        return throwException(
          "Not Found",
          status,
          _responseText,
          _headers,
          result404
        );
      });
    } else if (status !== 200 && status !== 204) {
      return response.text().then((_responseText) => {
        return throwException(
          "An unexpected server error occurred.",
          status,
          _responseText,
          _headers
        );
      });
    }
    return Promise.resolve<SwaggerResponse<Nfts>>(
      new SwaggerResponse(status, _headers, null as any)
    );
  }
}
