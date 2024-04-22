type Action = {
  triggered: boolean;
  energyCost: number;
};

export default class Movement {
  public right: Action = {
    triggered: false,
    energyCost: 1,
  };
  public left: Action = {
    triggered: false,
    energyCost: 1,
  };
  public jump: Action = {
    triggered: false,
    energyCost: 3,
  };
  public slide: Action = {
    triggered: false,
    energyCost: 3,
  };
  public use: Action = {
    triggered: false,
    energyCost: 0,
  };
  public run: Action = {
    triggered: false,
    energyCost: 2,
  };
  public pause: Action = {
    triggered: false,
    energyCost: 0,
  };
}
