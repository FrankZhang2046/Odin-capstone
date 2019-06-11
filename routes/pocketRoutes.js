const {Router} = require('express');
const router = Router();
const axios = require('axios');
const PocketArticle = require('../data/models/pocketArticle');

const getAccessToken = (req, res) => {
    const {key, token} = req.body;
    axios.post('https://getpocket.com/v3/oauth/authorize', {
        consumer_key: key,
        code:token
    })
        .then(result => res.send(result.data))
}

const writeArticlesToDatabase = (req, res) => {
    const {key, token} = req.body;
    axios.get(`https://getpocket.com/v3/get?consumer_key=${key}&access_token=${token}&count=20`)
         .then(result => {
                const myList = result.data.list;
                const myKeys = Object.keys(result.data.list);
                console.log(myList);
                for (let i =0; i<myKeys.length; i++){
                    const item = myList[`${myKeys[i]}`];
                    const article = new PocketArticle({
                        user_id: token,
                        item_id: item.item_id,
                        resolved_id: item.resolved_id,
                        given_url: item.given_url,
                        given_title: item.given_title,
                        favorite: item.favorite,
                        status: item.status,
                        time_added: item.time_added,
                        time_updated: item.time_updated,
                        time_read: item.time_read,
                        time_favorited: item.time_favorited,
                        sort_id: item.sort_id,
                        resolved_title: item.resolved_id,
                        resolved_url: item.resolved_url,
                        excerpt: item.excerpt,
                        is_article: item.is_article,
                        is_index: item.is_index,
                        has_video: item.has_video,
                        has_image: item.has_image,
                        word_count: item.word_count,
                        lang: item.lang,
                        time_to_read: item.time_to_read,
                        top_image_url: item.top_image_url,
                        listen_duration_estimate: item.listen_duration_estimate
                    })
                    article.save();
                }
                res.send(`articles written to database`);
             })
    // res.send(`key: ${key} token: ${token}`)
}

const retrieveArticles = (req, res) => {
    const {token} = req.body;
    PocketArticle.find({"user_id": token}).exec().then(result => res.send(result))
}

const emptyDb=(req,res)=>{
    PocketArticle.remove().exec().then(res.send(`all articles emptied`))
}

const scrapeArticle = (req, res) => {
    axios.get(`https://text.getpocket.com/v3/text?consumer_key=${req.body.key}&url=${req.body.url}&images=1&output=json`)
         .then(result => res.send(result.data))
}

const getFakeArticle = (req, res) => {
    res.send({
        "resolved_id": "2619919554",
        "resolvedUrl": "https://www.bustle.com/p/will-itunes-retire-on-windows-heres-how-pc-users-will-be-affected-by-macos-105-catalina-17953397",
        "host": "bustle.com",
        "title": "Will iTunes Retire On Windows? Here's How PC Users Will Be Affected By MacOS 10.5 Catalina",
        "datePublished": "0000-00-00 00:00:00",
        "timePublished": -62169962400,
        "responseCode": "200",
        "excerpt": "On June 3, at WWDC 2019, Apple announced that iTunes as we know it will be discontinued due to macOS-related updates that will take the app in another direction, ending its current iteration.",
        "authors": {
            "75832492": {
                "author_id": "75832492",
                "name": "Kaitlyn Wylde",
                "url": "https://www.bustle.com/profile/kaitlyn-wylde-1911117"
            }
        },
        "images": {
            "1": {
                "item_id": "2619919554",
                "image_id": "1",
                "src": "https://imgix.bustle.com/uploads/getty/2019/6/4/063af6cd-e9d6-491b-aee1-30e4e3d3c987-getty-50962074.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
                "width": "0",
                "height": "0",
                "credit": "Ian Waldie/Getty Images News/Getty Images",
                "caption": ""
            }
        },
        "videos": "",
        "wordCount": 581,
        "isArticle": 1,
        "isVideo": 0,
        "isIndex": 0,
        "usedFallback": 0,
        "requiresLogin": 0,
        "lang": "en",
        "topImageUrl": "https://imgix.bustle.com/uploads/getty/2019/6/4/063af6cd-e9d6-491b-aee1-30e4e3d3c987-getty-50962074.jpg?w=1200&h=630&q=70&fit=crop&crop=faces&fm=jpg",
        "domainMetadata": {
            "name": "Bustle",
            "logo": "https://logo.clearbit.com/bustle.com?size=800",
            "greyscale_logo": "https://logo.clearbit.com/bustle.com?size=800&greyscale=true"
        },
        "article": "<div  lang=\"en\"><div class=\"RIL_IMG\"><img src=\"https://imgix.bustle.com/uploads/getty/2019/6/4/063af6cd-e9d6-491b-aee1-30e4e3d3c987-getty-50962074.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70\" /><span class=\"ril_caption\"> <cite>Ian Waldie/Getty Images News/Getty Images</cite></span></div>\n<p nodeIndex=\"22\">On June 3, at WWDC 2019, Apple announced that iTunes as we know it will be discontinued due to macOS-related updates that will take the app in another direction, ending its current iteration. As \"iTunes Is Dead\" stories spread across the internet, many non-Mac iPhone users were wondering if <a href=\"https://www.pcmag.com/news/368772/apple-itunes-lives-on-for-windows-pc-users\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"42\">iTunes will retire on Windows</a>, too. For, if iTunes is only being phased out for new Mac programs, wouldn't it stand to reason that the loophole to iTunes' D-Day might exist on a PC?</p>\n<p nodeIndex=\"23\">According to <em nodeIndex=\"43\">PC Mag</em>, <a href=\"https://www.pcmag.com/news/368772/apple-itunes-lives-on-for-windows-pc-users\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"44\">iTunes will indeed live on within Windows</a>, at least for the time being. When <a href=\"https://www.apple.com/macos/catalina-preview/\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"45\">macOS 10.5 Catalina rolls out later this year</a>, Mac users will notice that iTunes is gone, leaving Music, Podcast, and Apple TV apps in its place. So, your music isn't going anywhere, just the way you watch media is about to get Kardashian-pantry-level organized. For many Mac users, the change isn't a bad one, and frankly they're used to frequent &mdash; and sometimes drastic&nbsp;&mdash; changes between operating systems. But for now, <a href=\"https://bgr.com/2019/06/05/itunes-shutting-down-2019-still-on-windows-10/\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"46\">iTunes will remain on Windows</a> computers, so all of the nostalgic PC users who love iTunes are protected.</p>\n<p nodeIndex=\"24\">According to Microsoft, <a href=\"https://www.microsoft.com/en-us/store/most-popular/apps/pc\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"47\">iTunes is holds the number one ranking</a> on the Windows app store, pushing Netflix out to third place and Instagram to fourth place &mdash; a clear indication that Windows users would be the most seriously affected by the change. Apple might eventually phase out iTunes completely, but for now, it seems like Windows users can enjoy the service at its current version, without issue.</p>\n<p nodeIndex=\"25\">As for Mac users, changes are coming. But don't worry, they're good ones. With Apple services growing so much, it makes sense that iTunes would need to evolve in order for host said changes efficiently. Instead of making iTunes more complex than it needs to be, Apple decided to break it down into three different apps, to optimize each media, individually. Not to mention, each app has different needs, so giving them space to operate independently will only improve our experience with them. Here's what current Mac users (and potentially future Windows users) can expect from the <a href=\"https://www.bustle.com/p/apple-tvs-for-all-mankind-trailer-gives-the-moon-landing-a-surprise-twist-video-17944235\" nodeIndex=\"48\">new and improved iTunes</a> replacements:</p>\n<h2 nodeIndex=\"26\">1. Apple Music</h2>\n<p nodeIndex=\"27\">The new Music app is built to provide endless streaming. I mean literally, there's over <a href=\"https://www.marketwatch.com/story/where-to-get-the-cheapest-music-now-that-apple-is-phasing-out-itunes-2019-06-04\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"49\">50 million songs in the library</a>. The app will curate genres and playlists as that will help you find new music, but you'll also find all of your old music that you've collected over the years there, too. If you're signed up for Apple Music, you can download all the music your heart desires and your storage allows.</p>\n<h2 nodeIndex=\"28\">2. Apple TV</h2>\n<figure nodeIndex=\"50\"></figure>\n<figure nodeIndex=\"51\"></figure><p nodeIndex=\"31\">The <a href=\"https://www.engadget.com/2019/06/03/apple-tv-macos-catalina/?guccounter=1&amp;guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&amp;guce_referrer_sig=AQAAALMIOAdQHKNq-10QzyFPCYTudcDQ2Em2D_85ZrmfJwDThuoJyl738ckgJMztUEqFLp_xmd_MjRVcz1LLcw57mJHdXjx1_cNtl0yImMOPSXS9hV2vL3HcXbaLDEpGgf9E9ZZI0FAK45NYYrp0fJPKpl7bB-75NIGvH6ZoveONbVvv\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"52\">Apple TV app for Mac</a> will become the hub for all of your previously purchased movies and TV shows, and also the place where you'll find all of your favorite movies, shows, premium channels, when Apple TV+ arrives later this year. To make watching even easier, you can pick up where you left off on any screen, across all your devices. AKA, if you started watching an episode of <em nodeIndex=\"53\">Billions</em> on your Apple TV in the living room, you can pick up where you left off on your computer in your office.</p>\n<h2 nodeIndex=\"32\">3. Apple Podcasts</h2>\n<p nodeIndex=\"33\">On this new app, you'll find more than <a href=\"https://www.fastcompany.com/90359221/itunes-shuts-down-what-happens-to-my-curated-music-library\" target=\"_blank\" rel=\"noopener noreferrer\" nodeIndex=\"54\">700,000 podcasts</a> at your fingers. You can browse by title, host, genre, and episode, and when you subscribe, you will be notified as soon as new episodes become available. Plus, you can pick up where you left off on each podcast across all devices, just like with Apple TV.</p>\n</div>"})
}


router.post('/', getAccessToken);
router.post('/write', writeArticlesToDatabase);
router.delete('/', emptyDb);
router.post('/get', retrieveArticles);
router.post('/scrape', scrapeArticle);
router.get('/fake', getFakeArticle);

module.exports = router;