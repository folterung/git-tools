import { BranchManager } from "./branch-manager";

describe('BranchManager', () => {
  let branchManager: BranchManager;

  beforeEach(() => {
    branchManager = new BranchManager();
  });

  it('exists', () => {
    expect(BranchManager).toBeDefined();
  });

  describe('.findLocalBranchesByRegex', () => {
    it('exists', () => {
      expect(branchManager.findLocalBranchesByRegex).toBeDefined();
    });

    it('returns a string[]', () => {
      expect(branchManager.findLocalBranchesByRegex(/my test regex/)).toEqual([]);
    });
  });
});