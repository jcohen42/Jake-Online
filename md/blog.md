<a id="4-23-25"></a>

# Software Spotlight: Mealie - April 23rd, 2025

<section>

A couple blog posts ago I talked about Bar Assistant, which has allowed me to create & manage cocktail recipes for my home bar. I've been using it more since the blog post and still love it a lot! No complaints from me. In that post, I mentioned [Mealie](https://mealie.io/), which is a similar selfhost-able service which lets you create & manage recipes (like, for food). Mealie is one of the first containers I spun up on my home server, about a year and a half ago. I can't remember exactly where, but I think I initially found out about it on one of those "what's in my home server" videos. I started with just a few recipes that my friends and family sent me, and immediately saw the benefits since I wasn't losing links from recipes that were sent to me a long time ago. The UI is also pretty nice, it takes me back to the Matthias Duarte era of peak material design.

If you have a recipe you'd like to add, you can paste in the link and the parser should automatically pick up the image, description, ingredients, and steps. I say should, sometimes I have to go back and fix things that were parsed incorrectly. 50% of the time, it works every time. I should mention, the parser can even look past paywalls on websites you may or may not have paid access to ;) You can also add recipes manually for non-standard websites or hand-written recipes. The home page is pretty basic, just listing out the recipes and your ratings. The recipe view is convenient. Not only does it keep the screen on my tablet awake, you can check off steps and ingredients as you use them! Then I don't get confused trying to remember which steps I already did :P

If you have a Raspberry Pi or other server sitting around, and are interested on stepp up your home cooking game, I'd strongly recommend Mealie! My only complaint is that the login session time is way too short, I feel like I have to log back in every time I access the site. If you'd like to check out a running instance to get the feel of it, you can visit my website [here](https://mealie.jakeonline.co/g/home).

</section>
<div class="pageGallery">
  <div>
    <img src="assets/blog/mealie-homescreen.png" >
    <p>Mealie home screen</p>
  </div>
  <div>
    <img src="assets/blog/mealie-recipe.png" >
    <p>Recipe view</p>
  </div>
</div>
<a id="3-29-25"></a>

# Markdown My Beloved - March 29th, 2025

<section>

One thing about me is that I looooove a good markdown language. It's a lot easier to write a formatted document compared to pure HTML (which yes, is also a markup language). Especially when writing blog posts for this website, it takes me a lot longer to write a new entry in HTML compared to something like CommonMark. I know taking the long way around is part of *the point* of Neocities, but still wanted some quality of life features to make adding to my website easier! So last week, I set out to find something that could convert markdown to HTML for me.

I found a tool called [markedjs](https://github.com/markedjs/marked), which seemed to do exactly what I was looking for! It was fairly easy to set up. Most of the time was spent actually translating my blog posts, projects, and resources from HTML to MD. The super nice thing about it is that you can still embed HTML within your markdown file. For example, the image galleries (like in the Neighborhood Cats post) are still written in HTML. In order to enable markedjs in a page, I added this HTML to the `<head>` section:

```html

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.1/purify.min.js"></script>
<script>
  fetch('md/blog.md')
    .then(res => res.text())
    .then(res => document.getElementById('blog').innerHTML = DOMPurify.sanitize(marked.parse(res)))
</script>


```

The DOMPurify script is highly recommended by markedjs in order to sanitize the HTML output. After adding these blocks to the head, I added the ID which the javascript was looking for in the section where I wanted to place my markdown, like `<div id="blog" class="remarked"></div>`. From there, I added some CSS to format each type! All in all, this was a nice little project to make it easier to add things to the website.

If you're interested in checking out the HTML & CSS for yourself, I recently publicized the GitHub repository which stores the source code for this website. Check it out [here](https://github.com/jcohen42/Jake-Online)!

</section>

<a id="3-13-25"></a>

# Software Spotlight: Bar Assistant - March 13th, 2025

<section>

I've taken up a couple smaller projects lately that aren't enough to occupy a section in the Projects page, and wanted to highlight one of them now. I've been loving [Mealie](https://mealie.jakeonline.co/) a lot, which is a service that allows you to create & manage recipes, including parsing recipes from a link. It's free and open source, and I host it on my home server! Here's a link to the [project website](https://mealie.io/). It's super helpful to have a single source to gather than all my recipes, because previously I'd lose links a lot.

Anyways, my friends have been getting me into cocktails lately, and I set out to find a similar service that would help me manage cocktail recipes, ideally one I could self-host. I then found [Bar Assistant](https://github.com/karlomikus/bar-assistant), which included everything I wanted and more! It lets me add & manage cocktail recipes, ingredients, and my bar shelf. It has an integrated shopping list and menu feature too. The coolest experimental(?) feature implements ingredients taxonomy, which gives you substitutions for ingredients not on your shelf. Like if there's a recipe that calls for dark rum but you only have light rum, it accounts for this.

All in all, it took around 3 hours for me to set up on my home server. It's a pretty setup if you're running solely within your local network, it's basically just setting up the docker-compose file. Most of the effort came from setting it up with  NGINX reverse proxy manager, which runs on a separate container and has a separate IP. One of the comments on [this Reddit post](https://www.reddit.com/r/selfhosted/comments/1awjed2/bar_assistantsaltrim_with_nginx_proxy_manager/) helped me out a lot (thanks u/BedtimeGuy!). In case it one day gets taken down, I'll post it here in case any of you wanted to set this up in a similar configuration to mine.

> Left this alone for a few months, but finally got it working! It was oddly simple in the end.

> First set up a CloudFlare DNS record (new one, in case caching is throwing it off).

> Then add an entry in NPM like [pictured below], with the domain name from CloudFlare, http scheme, the local IP of my server, and port 3000. Nothing in the custom locations/advanced tab. The usual SSL certificate setup.

> The docker compose is the same as the one in the Bar Assistant documentation (including the webserver container)

> Finally, change the BASE_URL value in your .env file to the full https url you set up in NPM. So in this example:

> `BASE_URL=https://bar.mydomain.com`

And that's Bar Assistant! If I find any other cool projects to spin up on my home server in the future, I'll post about them on here. It's a really well-built website, and is super fun after getting all my friends signed up on it so they could add their own custom cocktails. It's a nice feeling when you host something other people use!

</section>
<div class="pageGallery">
  <div>
    <img src="assets/blog/bar-assistant-1.png" >
    <p>All cocktails (it comes with 300 built-in)</p>
  </div>
  <div>
    <img src="assets/blog/bar-assistant-2.png" >
    <p>View of a specific cocktail (Paper Plane is the goat)</p>
  </div>
  <div>
    <img src="assets/blog/bar-assistant-3.png" >
    <p>Ingredients management menu</p>
  </div>
  <div>
    <img src="assets/blog/bar-assistant-npm.png" >
    <p>NGINX Proxy Manager setup</p>
  </div>
</div>
<a id="2-13-25"></a>

# Bwehhhhhhhhhhhhhhh - February 13th, 2025

<section>

Man, I haven't updated this in months. But I recently joined this hacker space thing and figured I should work on something while I'm there, so, here we are! Anyways, my partner made me a custom Decorable DS case for my birthday, it's so awesome! We've been talking about making another game one day, this time a smaller scope. Love Decorable, but it wasn't exactly a reasonable scope for a first game. Maybe we could do a game jam or two down the road? I think I'll leave off the post here, it's difficult for me to know what to talk about on these posts, especially because there hasn't been that much happening in my life that won't doxx me. I'll try to update this website as I have more ideas, we'll see what happens! Bye for now~

</section>
<div class="pageGallery">
  <div>
    <img src="assets/blog/decorable-front.jpg" >
    <p>Front of the case</p>
  </div>
  <div>
    <img src="assets/blog/decorable-back.jpg" >
    <p>Back of the case</p>
  </div>
</div>
<a id="8-8-24"></a>

# Neighborhood Cats - August 8th, 2024

<section>

Happy Vriska day! I've been going on a lot of walks lately in a neighborhood I moved into kinda recently. The weather is nice and there are some cool houses, but the best thing are the outdoor cats that I sometimes find! I used to go on walks just to touch some grass, but now I mostly do it to scout some cute cats :3 So far all of the cats I've seen have been very nice, and I can't wait to find some more! These photos below were all taken within a couple months of each other, not on the same walk (but I wish there were that many cats roaming around!).

The first cats I took a picture of were these two stoic guys sitting on a staircase. They appreciated some pets, but mainly sat there mogging us >:3

After a month passed, I went on another walk and saw this long-haired dude. He was probably the softest cat ever :D but as soon as I knelt down to pet him he started flopping and rolling on the ground, getting lots of debris in his fur, hehe. I gave him a good brush before I went on my way.

On another walk with my partner (specifically to scope out cats), we saw this tuxedo who was missing their left ear. He was funny because he would walk by us for a quick pet, then sit a few steps away only to come swinging back around a few seconds later for another petting.

Finally, the friendliest cat I've ever met! I saw a cat sleeping on an apartment staircase, so at first I wasn't going to pet her. But then she woke up and meowed at me, so I started petting her. Almost immediately she climbed up onto my lap and started purring. It made me so happy ^_^ Definitely need to go back and say hi again soon!

Anyways, all this cat prowling has been making me really, really want a cat. I want my own little guy to play with!!! Until next time, bye bye 👋

</section>
<div class="pageGallery">
  <div>
    <img src="assets/blog/two-of-them.jpg" >
    <p>Two of them<br>Two of them</p>
  </div>
  <div>
    <img src="assets/blog/longhair.jpg" >
    <p>This one flopped over as soon as I started petting him :3</p>
  </div>
  <div>
    <img src="assets/blog/ear.jpg" >
    <p>A friendly one who loved drive-by pets</p>
  </div>
  <div>
    <img src="assets/blog/stella.jpg" >
    <p>This is Stella who was the sweetest!</p>
  </div>
</div>
<a id="7-12-24"></a>

# My First Blog Post - July 12th, 2024

<section>

Hey, this is my first blog post! This is more of a placeholder than anything, but I'll talk a bit about my future plans for the site. I'll be figuring out theming and styling more as time goes on, as I think it's not quite there. I'd like to find a different font for the navbar as well as normal text on the page. Also I'll be looking for more helpful tools in the Resources page!

As for the Projects page, I have a number of big to small thingies that I've done over the years that I'll be uploading one-by-one. I plan on having a dedicated page for each project, aside from the overview that's visible now. Of course, I'll be updating the Games and Music page as I discover more, but for the most part they're basically complete.

I think that's it! Anyways, enjoy this photo I took of a Portland MAX train in Washington Park Station. It's so hard to get decent pictures of moving trains on my phone >_<

</section>

![Portland MAX Train](assets/blog/max.jpg)