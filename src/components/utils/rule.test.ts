import { RuleRegistry } from './RuleRegistry';

describe('RuleRegistry', () => {
  let ruleRegistry: RuleRegistry;

  beforeEach(() => {
    ruleRegistry = RuleRegistry.REGISTRY;
  });

  it('should return the same instance of RuleRegistry', () => {
    const registryInstance1 = RuleRegistry.REGISTRY;
    const registryInstance2 = RuleRegistry.REGISTRY;

    expect(registryInstance1).toBe(registryInstance2);
    expect(registryInstance1).toBe(ruleRegistry);
  });

  it('should create a new instance if _instance is not set', () => {
    const ruleRegistryInstance = new RuleRegistry();

    expect(ruleRegistryInstance).toBeInstanceOf(RuleRegistry);
    expect(ruleRegistryInstance).not.toBe(ruleRegistry);
  });
});
