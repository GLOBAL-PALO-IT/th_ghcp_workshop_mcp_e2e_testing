# Furniro - Product Detail Page

## Description
Static HTML/CSS/JavaScript product detail page based on Figma design.

## Project Structure
```
hands_on/02/
├── index.html    - Main HTML file
├── style.css     - CSS styling
├── script.js     - JavaScript functionality
└── README.md     - Documentation
```

## Features Implemented

### 1. Header Section
- Logo (Furniro)
- Navigation menu (Home, Shop, About, Contact)
- Header icons (Account, Search, Wishlist, Cart)

### 2. Breadcrumb Navigation
- Home > Shop > Asgaard sofa

### 3. Product Detail Section
- Product image gallery with thumbnail selector
- Product information:
  - Title: Asgaard sofa
  - Price: Rs. 250,000.00
  - Rating: 5 stars with review count
  - Product description

### 4. Product Attributes
- **Size Selection**: XS, L, XL (with active state)
- **Color Selection**: Purple, Black, Gold (with active state)

### 5. Purchase Controls
- Quantity selector (+/- buttons)
- Add to Cart button
- Compare button

### 6. Product Metadata
- SKU: SS001
- Category: Sofas
- Tags: Sofa, Chair, Home, Shop
- Share buttons (Facebook, Twitter, LinkedIn)

### 7. Tabs Section
- Description tab (default active)
- Additional Information tab
- Reviews tab [5]

### 8. Related Products
- 4-column grid of related products
- Discount badges (-30%, -50%)
- New product badges
- Show More button

### 9. Footer
- Company info (Furniro)
- Links section (Home, Shop, About, Contact)
- Help section (Payment Options, Returns, Privacy)
- Newsletter subscription form
- Copyright notice

## How to Use

1. **Open in Browser**
   ```bash
   open index.html
   # or
   # Right-click on index.html and select "Open with > Your Browser"
   ```

2. **Interactive Features**
   - Click thumbnails to change main product image
   - Select size and color options
   - Adjust quantity with +/- buttons
   - Add to cart
   - Click tabs to view different product information
   - Subscribe to newsletter

## JavaScript Functionality

### Image Gallery
- Click on thumbnail images to update the main product image

### Size & Color Selection
- Visual feedback for selected options
- Toggle active states

### Quantity Controls
- Increase/decrease quantity
- Minimum quantity: 1

### Button Actions
- Add to Cart: Shows alert with product details
- Compare: Opens compare dialog
- Wishlist: Toggle wishlist status
- Cart: View shopping cart
- Search: Search for products
- Account: Login/profile

### Tabs Navigation
- Switch between Description, Additional Info, and Reviews

### Newsletter
- Subscribe with email validation

## Styling Details

### Colors
- Primary: #B88E2F (Gold)
- Dark: #000000
- Light Background: #F9F1E7
- Gray Text: #9F9F9F
- Border: #D9D9D9
- Error Red: #E97171
- Success Green: #2EC1AC

### Typography
- Font Family: Poppins (body), Montserrat (headings)
- Responsive font sizes
- Proper line heights for readability

### Responsive Design
- Desktop: Full 4-column product grid
- Tablet (1024px): 2-column grid
- Mobile (768px): Single column layout

## Testing Checklist

- [ ] Header navigation works
- [ ] Image gallery thumbnail switching
- [ ] Size selection toggle
- [ ] Color selection toggle
- [ ] Quantity increase/decrease
- [ ] Add to cart functionality
- [ ] Tab switching
- [ ] Newsletter subscription
- [ ] All links are clickable
- [ ] Responsive design on different screen sizes

## Future Enhancements

1. Add backend API integration
2. Implement shopping cart persistence
3. Add product reviews
4. Implement user authentication
5. Add payment gateway
6. Improve product image loading

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author
Created for AI-Powered Testing Workshop

## Last Updated
January 15, 2026
