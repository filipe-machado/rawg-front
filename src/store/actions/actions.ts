class StateLoader {
  protected serializedState: string | null = null;

  protected formData: Record<string, unknown> = {};

  private env: string;

  constructor() {
    this.env = 'store';
  }

  public loadState(): Record<string, unknown> {
    try {
      this.serializedState = localStorage.getItem(this.env);

      if (this.serializedState === null) {
        return this.initializeState();
      }

      return JSON.parse(this.serializedState) as Record<string, unknown>;
    } catch (err) {
      return this.initializeState();
    }
  }

  public saveState(state: Record<string, unknown>): void {
    this.serializedState = JSON.stringify(state);
    localStorage.setItem(this.env, this.serializedState);
  }

  private initializeState(): Record<string, unknown> {
    this.formData = {};
    return this.formData;
  }
}

export default StateLoader;
