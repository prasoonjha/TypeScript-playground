import fs from "fs";
import { MatchResult } from "./matchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]; //tuple

export abstract class CsvFileReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }

}
