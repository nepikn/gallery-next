# Gallery Next

[Live Demo](https://nepikn-gallery-next.vercel.app)

## 主要技術

- Next v13
  - App Router (Layout, Page, Dynamic Route)
  - Metadata (Dynamic Metadata, Template Title)
  - Environment Variable
- React v18
  - JSX
  - Component
- TypeScript v5
  - Utility Type (Awaited, ReturnType, Parameters)
- Tailwind CSS v3
  - Responsive Web Design
  - Flexbox
  - Grid
- RESTful API
  - [Unsplash API](https://unsplash.com/developers)
- Library
  - [Embla Carousel](https://www.embla-carousel.com)
  - [Plaiceholder](https://plaiceholder.co/docs)

## 展示

### 1024px

| /      | /explore         | /meet-artists         | /photos/6ArTTluciuA   |
| ------ | ---------------- | --------------------- | --------------------- |
| Natrue | Natrue - Explore | Natrue - Meet Artists | Natrue - Ocean Ripple |

### 768px

### 425px

<script>
  document.querySelectorAll("h3").forEach((h3, i) => {
    const width = h3.textContent?.match(/\d+/);

    if (i > 0) {
      h3.insertAdjacentHTML(
        "afterend",
        `<table>
        <tbody>
        </tbody>
      </table>`,
      );
    }

    h3.nextElementSibling?.querySelector("tbody")?.insertAdjacentHTML(
      "beforeend",
      `<tr>
      <td><img src="./snaps/${width}.jpg"></td>
      <td><img src="./snaps/${width}-explore.jpg"></td>
      <td><img src="./snaps/${width}-meet-artists.jpg"></td>
      <td><img src="./snaps/${width}-photos.jpg"></td>
    </tr>`,
    );
  });
</script>

<style>
  th, td {
    vertical-align: top;
  }
</style>
