export const testPayload = {
  cocktails:
    '# Gin Martini\n\n## Ingredients\n* Gin - 2.5 oz\n* Dry vermouth - 0.5 oz\n* Optional: Green olives or lemon twist - for garnish\n\n## Steps\n* Step 1: Fill a mixing glass with ice.\n* Step 2: Add gin and dry vermouth, and stir until well chilled.\n* Step 3: Strain into a chilled martini glass.\n* Step 4: Garnish with olives or a lemon twist.\n\n# Pink Gin\n\n## Ingredients\n* Gin - 2 oz\n* Angostura bitters - 4 dashes\n\n## Steps\n* Step 1: Fill an old-fashioned glass with ice to chill and let it sit for a minute.\n* Step 2: Discard ice, and add 4 dashes of Angostura bitters to the glass, swirling to coat the inside of the glass.\n* Step 3: Fill the glass with fresh ice.\n* Step 4: Pour gin over the ice and stir gently. Serve.\n\n# Gin \u0026 It\n\n## Ingredients\n* Gin - 2 oz\n* Dry vermouth - 1 oz\n* Optional: Lemon twist - for garnish\n\n## Steps\n* Step 1: Fill a mixing glass with ice.\n* Step 2: Add gin and dry vermouth, and stir until well chilled.\n* Step 3: Strain into a chilled cocktail glass or a glass with ice.\n* Step 4: Garnish with a lemon twist (optional).',
  cocktails_parsed: [
    {
      Name: 'Gin Martini',
      Ingredients: [
        { Name: 'Gin', Size: '2.5 oz' },
        { Name: 'Dry vermouth', Size: '0.5 oz' },
        { Name: 'Optional: Green olives or lemon twist', Size: 'for garnish' },
      ],
      Steps: [
        'Step 1: Fill a mixing glass with ice.',
        'Step 2: Add gin and dry vermouth, and stir until well chilled.',
        'Step 3: Strain into a chilled martini glass.',
        'Step 4: Garnish with olives or a lemon twist.',
      ],
    },
    {
      Name: 'Pink Gin',
      Ingredients: [
        { Name: 'Gin', Size: '2 oz' },
        { Name: 'Angostura bitters', Size: '4 dashes' },
      ],
      Steps: [
        'Step 1: Fill an old-fashioned glass with ice to chill and let it sit for a minute.',
        'Step 2: Discard ice, and add 4 dashes of Angostura bitters to the glass, swirling to coat the inside of the glass.',
        'Step 3: Fill the glass with fresh ice.',
        'Step 4: Pour gin over the ice and stir gently. Serve.',
      ],
    },
    {
      Name: 'Gin \u0026 It',
      Ingredients: [
        { Name: 'Gin', Size: '2 oz' },
        { Name: 'Dry vermouth', Size: '1 oz' },
        { Name: 'Optional: Lemon twist', Size: 'for garnish' },
      ],
      Steps: [
        'Step 1: Fill a mixing glass with ice.',
        'Step 2: Add gin and dry vermouth, and stir until well chilled.',
        'Step 3: Strain into a chilled cocktail glass or a glass with ice.',
        'Step 4: Garnish with a lemon twist (optional).',
      ],
    },
  ],
}
