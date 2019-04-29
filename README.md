# DevSpec
## About DevSpec
DevSpec is a feedback analysis tool built specifically for capturing feedback about video games from public discussion forums. DevSpec is built to assist the development process by allowing the development teams to identify dificulties faced by the players such as performance issues, bugs and imbalences along with other useful information such suggestions and requests posted on public discussion forums by players.The current version of the DevSpec tool is only integrated with **Reddit** and is capable of performing the following tasks,

1. **Analyze a chosen subreddit**
2. **Categorize discussions under user-defined categories**
3. **Further categorize discussions in each user-defined category according to intentions present in the discussions such as,**
   - *Suggesting Feature*
   - *Reporting a bug*
   - *Requesting Information*
   - *Providing Information*
   - *Other*
4. **Create a summary (of the length of 10 sentences) for a specified number of discussions in each intention sub-category**

## How to Analyze with DevSpec
### 1. Add Subreddit
In order to perform an analysis on a subreddit, It must first be added to the system. If the specified subreddit has not added to the system before, the system will first retrieve all the submissions from the subreddit and train the DevSpec analysis model with the retrived data. This process will usually take upto 5 hours. Once the training has been completed the subreddit will be available for analyzing. Currently the end-users cannot perform this action and for demonstration purposes the tool has already been trained for analysis of [r/PUBATTLEGROUNDS](https://www.reddit.com/r/PUBATTLEGROUNDS). A subreddit about the popular Battle Royale tile Player Unknowns Battle Grounds.

### 2. Enter Query Information
To analyze a specific subreddit a user must first provide the following information,
1. Name of the Subreddit
2. A starting date(All discussions submitted to the mentioned subreddit after this date will be analyzed)
3. An ending date(All discussions submitted to the mentioned subreddit before this date will be analyzed)
4. A set of categories and their names
5. A set of key words for each category(common words found in this category)
6. The number of discussions to summarize for each intention sub-category.

eg. analyze feedback according to 7 categories and for each sub-category show 2 discussions summarized 

| subreddit  | r/PUBATTLEGROUNDS |
| ------------- | ------------- |
| start  | 2018/05/22  |
| end  | 2018/08/22  |
| category 1  | Performance  |
| category 1 Key words  | 'fps','ram','cpu','freeze','crash','gpu' |
| category 2  | Maps  |
| category 2 Key words  | 'erangle','texture','buildigs','map' |
| category 3  | Network  |
| category 3 Key words  | 'lag','rubberband','EU','server' |
| discussions in summary  | 2 |

The following image shows the mockup of the tools query information page 
#######TODO ADD IMAGE

### 3. Assess the models interpritation of the topics
In order to get the best results from DevSpec the users must first make sure the categories that has been defined are properly interpreted by the system. This can be easily done by looking at the topic interpritation graph and by inspecting the word-cloud graph generated for each topic 


