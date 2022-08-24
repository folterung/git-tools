import { execSync } from "child_process";

export class BranchManager {
  findLocalBranchesByRegex(regex: RegExp): string[] {
    const branchesThatMatch: string[] = [];
    // Add code to find an return all branches that match the provided regex.

    const result = execSync('git br', { encoding: 'utf-8'}).toString();

    console.log('Result: ', result);

    return branchesThatMatch;
  }
}