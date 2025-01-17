import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class PostgreSQLAdapter {
  constructor(private readonly databaseService: DatabaseService) {}

  async getServerTime(): Promise<Date> {
    return this.databaseService.getServerTime();
  }
}