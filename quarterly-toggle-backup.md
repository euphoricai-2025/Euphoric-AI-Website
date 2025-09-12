# Quarterly Toggle Implementation Backup

This file contains the exact implementation of the quarterly toggle that was removed from the pricing page. Copy this back to restore the quarterly functionality.

## State Management

```tsx
const [isQuarterly, setIsQuarterly] = useState(true);

const getDisplayPrice = (basePrice) => {
  return isQuarterly ? Math.round(basePrice * 0.9) : basePrice;
};
```

## Toggle Component - "As You Grow" Section (Lines 141-173)

```tsx
{/* Billing Period Toggle */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="flex items-center justify-center mb-12"
>
  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl inline-flex items-center gap-6 border border-brand-teal/20 shadow-lg">
    <span className={`text-lg font-semibold transition-all duration-300 ${!isQuarterly ? 'text-brand-teal' : 'text-gray-500'}`}>
      Monthly
    </span>
    <button
      onClick={() => setIsQuarterly(!isQuarterly)}
      className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 shadow-inner ${
        isQuarterly ? 'bg-brand-teal' : 'bg-gray-200 hover:bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-7 w-7 transform rounded-full bg-white transition-all duration-300 ease-in-out shadow-md ${
          isQuarterly ? 'translate-x-8 scale-105' : 'translate-x-0.5 scale-100'
        }`}
      />
    </button>
    <div className="flex items-center gap-3">
      <span className={`text-lg font-semibold transition-all duration-300 ${isQuarterly ? 'text-brand-teal' : 'text-gray-500'}`}>
        Quarterly
      </span>
      <span className="text-sm font-bold text-white bg-brand-teal px-3 py-1.5 rounded-full shadow-sm animate-pulse">
        Save 10%
      </span>
    </div>
  </div>
</motion.div>
```

## Toggle Component - Comparison Chart Section (Lines 620-652)

```tsx
{/* Billing Period Toggle */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="flex items-center justify-center mb-12"
>
  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl inline-flex items-center gap-6 border border-brand-teal/20 shadow-lg">
      <span className={`text-lg font-semibold transition-all duration-300 ${!isQuarterly ? 'text-brand-teal' : 'text-gray-500'}`}>
        Monthly
      </span>
      <button
        onClick={() => setIsQuarterly(!isQuarterly)}
        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:ring-offset-2 shadow-inner ${
          isQuarterly ? 'bg-brand-teal' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-7 w-7 transform rounded-full bg-white transition-all duration-300 ease-in-out shadow-md ${
            isQuarterly ? 'translate-x-8 scale-105' : 'translate-x-0.5 scale-100'
          }`}
        />
      </button>
      <div className="flex items-center gap-3">
        <span className={`text-lg font-semibold transition-all duration-300 ${isQuarterly ? 'text-brand-teal' : 'text-gray-500'}`}>
          Quarterly
        </span>
        <span className="text-sm font-bold text-white bg-brand-teal px-3 py-1.5 rounded-full shadow-sm animate-pulse">
          Save 10%
        </span>
      </div>
    </div>
</motion.div>
```

## Price Display Usage in Cards

```tsx
// Standard Plan - Line 240
<span className="text-3xl font-bold text-gray-900">${getDisplayPrice(399)}</span>

// Growth Plan - Line 303  
<span className="text-3xl font-bold text-gray-900">${getDisplayPrice(549)}</span>

// Pro Plan - Line 379
<span className="text-3xl font-bold text-gray-900">${getDisplayPrice(849)}</span>

// Premium Plan - Line 447
<span className="text-3xl font-bold text-gray-900">${getDisplayPrice(1249)}</span>
```

## Conditional Stripe Links - "As You Grow" Section

```tsx
// Standard Plan Link - Lines 243-250
<a 
  href={isQuarterly ? "https://buy.stripe.com/bJeaEXdwp6jf7SLaFV8g00g" : "https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
>
  Subscribe
</a>

// Growth Plan Link - Lines 306-313
<a 
  href={isQuarterly ? "https://buy.stripe.com/eVq3cvfEx4b7c913dt8g00h" : "https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
>
  Subscribe
</a>

// Pro Plan Link - Lines 382-389
<a 
  href={isQuarterly ? "https://buy.stripe.com/00w7sLeAtfTP3Cv6pF8g00i" : "https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
>
  Subscribe
</a>

// Premium Plan Link - Lines 450-457
<a 
  href={isQuarterly ? "https://buy.stripe.com/7sYdR9gIB0YV7SLcO38g00j" : "https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors mt-auto block text-center"
>
  Subscribe
</a>
```

## Conditional Stripe Links - Comparison Chart Section

```tsx
// Standard Plan Link - Lines 687-695
<a 
  href={isQuarterly ? "https://buy.stripe.com/bJeaEXdwp6jf7SLaFV8g00g" : "https://buy.stripe.com/dRm8wPeAtcHD1unaFV8g00c"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
>
  Get Started
</a>

// Growth Plan Link - Lines 704-712
<a 
  href={isQuarterly ? "https://buy.stripe.com/eVq3cvfEx4b7c913dt8g00h" : "https://buy.stripe.com/bJe6oH1NH0YV0qj3dt8g00k"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
>
  Subscribe
</a>

// Pro Plan Link - Lines 721-729
<a 
  href={isQuarterly ? "https://buy.stripe.com/00w7sLeAtfTP3Cv6pF8g00i" : "https://buy.stripe.com/dRm3cv3VPcHDc91dS78g00e"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
>
  Subscribe
</a>

// Premium Plan Link - Lines 738-746
<a 
  href={isQuarterly ? "https://buy.stripe.com/7sYdR9gIB0YV7SLcO38g00j" : "https://buy.stripe.com/3cIbJ10JD8rnfld4hx8g00f"}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full px-2 py-2 bg-brand-teal text-white rounded-lg text-xs font-semibold hover:bg-brand-teal/90 transition-colors shadow-sm mt-auto whitespace-nowrap block text-center"
>
  Subscribe
</a>
```

## Comparison Chart Price Display

```tsx
// Standard Plan - Line 685
<div className="text-2xl font-bold mb-1 text-brand-teal">${getDisplayPrice(399)}</div>

// Growth Plan - Line 702
<div className="text-2xl font-bold mb-1 text-brand-teal">${getDisplayPrice(549)}</div>

// Pro Plan - Line 719
<div className="text-2xl font-bold mb-1 text-brand-teal">${getDisplayPrice(849)}</div>

// Premium Plan - Line 736
<div className="text-2xl font-bold mb-1 text-brand-teal">${getDisplayPrice(1249)}</div>
```

## How to Restore

1. Add the state management code at the top of the component
2. Add the toggle component(s) where needed
3. Replace static prices with `${getDisplayPrice(basePrice)}`
4. Replace static Stripe links with conditional links based on `isQuarterly`
5. Restore the `getDisplayPrice` function

## Notes

- The quarterly pricing applies a 10% discount (multiply by 0.9)
- Each plan has two Stripe links: one for monthly, one for quarterly
- The toggle appears in both "As You Grow" section and comparison chart
- The toggle has smooth animations and proper focus states