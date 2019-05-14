## About DevSpec
DevSpec is a feedback analysis tool built specifically for capturing feedback about video games from public discussion forums. DevSpec is built to assist the development process by allowing the development teams to identify difficulties faced by the players such as performance issues, bugs and imbalances present in the game along with other useful information about the game such as suggestions and requests posted on public discussion forums by players. The current version of the DevSpec tool is only integrated with **Reddit** and is capable of performing the following tasks,

1. **Analyze a chosen subreddit**
2. **Categorize discussions under user-defined categories**
3. **Further categorize discussions in each category according to 5 intention sub-categories which are,**
   - *Suggesting a Feature*
   - *Reporting a bug*
   - *Requesting Information*
   - *Providing Information*
   - *Other*
4. **Create a summary for a specified number of discussions in each intention sub-category**

Each category and sub-category will provide a set of submission IDs these IDs can later be accessed by combining with a base URL
eg : **id** - 9lxki7 | **URL** - https://www.reddit.com/r/PUBATTLEGROUNDS/comments/9lxki7/

## How to Analyze with DevSpec
### 1. Add Subreddit
In order to perform an analysis on a subreddit, It must first be added to the system. If the specified subreddit has not been added to the system before, the system will first retrieve all the submissions(posts) from the subreddit and train the DevSpec analysis model with the retrieved data. This process will usually take up to 5 hours. Once the training has been completed the subreddit will be available for analyzing. Currently the end-users cannot perform this action and for demonstration purposes the tool has already been trained for the analysis of [r/PUBATTLEGROUNDS](https://www.reddit.com/r/PUBATTLEGROUNDS). A subreddit about the popular Battle Royale tile "Player Unknowns Battle Grounds".

### 2. Enter Query Information
To analyze a specific subreddit a user must first provide the following information,
1. Name of the Subreddit(assuming that it has already been added to the system)
2. A starting date(All discussions submitted to the mentioned subreddit after this date will be analyzed)
3. An ending date(All discussions submitted to the mentioned subreddit before this date will be analyzed)
4. A set of categories and their names to group discussions
5. A set of key words for each category(common words found in this category)
6. The number of discussions to summarize for each intention sub-category.

eg. analyze feedback according to 7 categories and for each sub-category show 4 discussions summarized 

| subreddit  | r/PUBATTLEGROUNDS |
| ------------- | ------------- |
| start  | 2018/05/22  |
| end  | 2018/08/22  |
| category 0  | Performance  |
| category 0 Key words  | 'fps','ram','cpu','freeze','crash','gpu' |
| category 1  | Gun play  |
| category 1 Key words  | 'gun','crosshair','shoot','recoil','control','spray' |
| category 2  | Micro-Transactions  |
| category 2 Key words  | 'crates','bp','skin','skins','camo' |
| category 3  | Sounds  |
| category 3 Key words  | 'footsteps','sound' |
| category 4  | Maps  |
| category 4 Key words  | 'erangel','map','maps','road','roads','compound' |
| category 5  | Hackers  |
| category 5 Key words  | 'anti','cheat','hackers','cheater','hacks' |
| category 6  | Network  |
| category 6 Key words  | 'server','desync','lag','network','ping' |
| discussions in summary  | 4 |

The following image shows the mockup of the tools query information page 

![Image of tool](https://i.imgur.com/VkE84nP.png)

### 3. Assess the model's interpretation scores of the defined categories
In order to get the best results out of the DevSpec tool the users must first make sure the categories that has been defined are properly interpreted by the tool. This can be easily done by looking at the topic interpretation graph and by inspecting the word-clouds  generated for each topic. Both the graph and the word-clouds will be presented to the user once the user has provided the query information. A sample output of the graph is shown below.


![Image of tool](https://i.imgur.com/XCfVPwa.png)

According to this graph we can see that categories 2 and 3 have low interpretation scores while categories 0,1 and 4 have high interpretation scores. This will mean that the discussions categorized under category 2 and 3 will not be as accurate compared to discussion categorized under category 0,1 and 4. This can be further analyzed by comparing the word clouds that are generated from the most probable words per each category.  

| category 4 Maps  | category 3 Sounds |
| ------------- | ------------- |
| ![Image of tool](https://i.imgur.com/KzAVP1Z.png)  | ![Image of tool](https://i.imgur.com/zJkyQfU.png)  |

From the table above we can see that the most probable words in the **category 4** word cloud represents the topic Maps **very well** while the **category 3** word cloud **does not represent** the topic Sounds. To increase the interpretation of the categories, the user must either define different categories or provide more informative keywords for each category

If all the categories have satisfactory interpretation scores the user can then proceed to analyze the feedback according to the given query information


### 4. View the Results 
The results will be presented to the user according to the following mockup.

![Image of tool](https://i.imgur.com/vgDXjaR.png)

## Technologies used in DevSpec

DevSpec in its core is a document categorization and summarization tool. To implement the document classification component of DevSpec [The CorEx](https://github.com/gregversteeg/corex_topic) Topic Modeling algorithm was used. This specific topic modeling framework allows seeding of each topic with pre defined anchors. this is what allows the DevSpec tool to define categories as well as key words per each category. This method is more accurate and desirable than traditional topic modeling approaches as the anchor words will allow better convergence towards each topic. 

For the summarization component a simple scoring algorithm has been implemented. The scoring algorithm will make use of the topic-word matrix produced by the CorEx algorithm and a domain trained word2vec model. The topic-word matrix will provide the most probable N number of words per each topic. If the specified topic is interpreted by the topic model well enough, the most probable words per each topic is intuitive and will describe the intended topic very well. The [word2vec](https://radimrehurek.com/gensim/models/word2vec.html) model will produce dense vectors for each word in the corpus. the corpus is constructed by extracting all the discussions from a particular subreddit. To score sentences, first the top 10(this number has been derived after analyzing many summaries) most probable words per each topic is combined to make a sentence. This sentence is a set of key words and is not meaningful. Using the word2vec's word representations for each word in the sentence, all word vectors in the constructed sentence are combined and divided by the number of words to make a dense sentence vector. Note that this will have minor performance losses as this method will discard the sequence of words when constructing the vector.

Once this sentence has been created all other sentences found in discussions will be scored according to the cosine similarity between the constructed topic sentence and the target sentence. This approach combined with other summarization methods such as clustering for reducing redundancy and sentence selection from unique sections in the document etc. will be used to create the final summary for each discussion. The logical flow of the algorithm  is shown below.


![Image of tool](https://i.imgur.com/6f2puYJ.jpg)





