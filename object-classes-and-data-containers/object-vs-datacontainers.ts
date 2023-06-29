//Object
class Database {
  private uri: string;
  private provider: any;
  private connection: any;

  constructor(uri: string, provider: any) {
    this.uri = uri;
    this.provider = provider;
  }

  connect() {
    try {
      this.connection = this.provider.establishConnection(this.uri);
    } catch (error) {
      throw new Error("Could not connect!");
    }
  }

  disconnect() {
    this.connection;
  }
}

//Data container
class UserCredentials {
  public email: string;
  public password: string;
}
