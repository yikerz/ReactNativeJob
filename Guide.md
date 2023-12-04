### Conceptual Questions

1. What is a stack in expo-router?
   - The first child in the stack is the root and is displayed at the bottom of the stack. The last child in the children array is the child currently being displayed.
     (ref: https://wix.github.io/react-native-navigation/docs/stack)
1. What is a splash screen?
   - A splash screen typically appears as the initial screen or loading screen of an app for a short period, usually just a few seconds, when the application is launched. The purpose of a splash screen is to provide a visual indication to the user that the application is loading or initializing.

### Setup

##### Initial project setup

1. Run `npx create-expo-app@latest --example with-router ./` in the project folder
   (ref: https://expo.github.io/router/docs/)
2. Create `_layout.js` and `index.js` in a new folder `app`
3. Define default function `Layout()` in `_layout.js`
   (Copy and paste `app/home/_layout.js` from https://docs.expo.dev/router/advanced/stack/ )
4. Define `Home` page function in `index.js`
   (ref: https://docs.expo.dev/router/advanced/stack/)
5. Install dependencies: `npm install expo-font@11.4.0 axios react-native-dotenv`
6. Copy and paste folders from tutorial
7. Create folders, `constants`, `assets`, `components` and `styles`
8. Create `index.js` for `constants` and `components` with export (module setup)
9. Copy and paste all files from tutorial to assets folder

### Home Screen

##### Title configuration for home stack using `Stack.Screen`

10. Create `useRouter` hook in `index.js` for navigating between pages
    (ref: https://levelup.gitconnected.com/routing-with-expo-router-981809eb4699)
11. Wrap everything inside `SafeAreaView` in `index.js` (with style)
12. Use `Stack.Screen` to config the title of the stack

##### Create `ScrollView` to wrap the main components, `Welcome`, `PopularJobs` and `NearbyJobs`, in the Home stack

13. Create `ScrollView` (do not show vertical scroller)
14. Create three components
    - `<Welcome/>`
    - `<PopularJobs>`
    - `<NearbyJobs>`
15. Export all components to `components > index.js`
16. `ScrollView` should wrap three components

##### Implementation of `ScreenHeaderBtn` component

17. Create `ScreenHeaderBtn` component (add to `index.js`)
18. `headerLeft` and `headerRight` in `Stack.Screen` should return `ScreenHeaderBtn` components
19. Change the return type of `ScreenHeaderBtn` as `TouchableOpacity`
20. The button is a clickable `<Image />` with
    1.  `source`
    2.  `resizeMode`
    3.  `style`
21. Three props needed in this components, `iconUrl`, `dimension`, `handlePress`
22. Add `onPress` to `TouchableOpacity` to trigger `handlePress`
23. Pass props to `ScreenHeaderBtn` in `Stack.Screen`

##### Implementation of basic layout of `Welcome` component

24. Create `useRouter` hook in `Welcome.jsx
25. Create basic layout for `Welcome` component
    - Display "Hello Username"
    - Display Welcome message
    - Display `TextInput` component as a search bar

##### Implement custom font

26. Makes Splash Screen remain visible when loading custom font
27. Use `useFonts` hook to load custom fonts in the Layout function
28. Use `useCallback` to trace `fontsLoaded`. Hide splash screen once fonts are loaded
29. Prevent from rendering Stack if fonts are not loaded, return `null`
30. Set `onLayout` for `Stack` (rerun `onLayoutRootView` when the layout of the component has changed)

##### Implemented search button and FlatList for selected job types

31. Create search button using `icons.search` next to search bar
32. Create three job types button, full-time, part-time and contractor, displayed below search bar using `FlatList`
    - Set unique `keyExtractor` for list item
    - Set `contentContainerStyle` for small `columnGap`
    - Set `horizontal`
33. `activeJobType` is react state used in `FlatList` to keep track on which tab is selected
34. The `onPress` callback for job type button should trigger `setActiveJobType` and route to `/search/${item}` using `router.push`

##### Create PopularJobs component

35. Create `useRouter` hook
36. Create `header`:
    1.  Left Title: Popular jobs
    2.  Right Button: clickable "Show all"
37. Below header, create a container for conditional rendering
38. If `isLoading`, render a large `ActivityIndicator` with primary color
39. If error occurs, render error message
40. Normal rendering, `FlatList` which `renderItem` is `PopularJobCard` component
    - Set unique `keyExtractor` for list item
    - Set `contentContainerStyle` for small `columnGap`
    - Set `horizontal`
41. Create `PopularJobCard` component

### API Integration

##### Create useFetch hook to send API request to RapidAPI with axios

43. Create `useFetch.js` in new folder `hook`
44. Create three states representing the fetch status
    1.  `data`
    2.  `isLoading`
    3.  `error`
45. Copy and paste the options from RapidAPI JSearch
46. Generic options with inputtable endpoint and query params
47. Create `fetchData` function
    1.  `setIsLoading(true)`
    2.  Use `axios.request(options)`
    3.  `setIsLoading(false)` after fetching
48. Use `useEffect` to trigger `fetchData` once when it is rendered at the beginning
49. Create another function `refetch` to make refetching data possible
50. Return all states and `refetch` method

##### Implement hook in PopularJobs component and create PopularJobCard

51. Replace `isLoading` and `error` by using `useFetch` with
    - `endpoint`: `search`
    - `query`: `{ query: 'Reach developer', num_pages: 1 }`
52. The `PopularJobCard` is a `TouchableOpacity`
53. Inside the card, the company logo is also a `TouchableOpacity`
54. `employer_name` is displayed below the logo with `numberOfLines={1}`
55. Below employer name, display `job_title` and `job_country`
56. Pass data to `FlatList`

##### Implement logo URL checker

57. Create `index.js` in new folder `utils` (directly copy and paste)
58. Run `checkImageURL` on `item.employer_logo` conditional return
    `checkImageURL(item.employer_logo) ? item.employer_logo : default url`

##### Implements NearbyJobs component

59. Create `NearbyJobCard` component in new folder `components > cards > nearby`
60. Copy `PopularJobs` to `NearbyJobs` with modification
61. Replace `FlatList` by `data?.map`, including props:
    1.  `job={job}`
    2.  `key={'nearby-job-${job?.job_id}'}`
    3.  `handleNavigate={() => router.push('/job-details/${job.job_id}') }`

##### Implements NearbyJobCard component

62. Copy `PopularJobCard` to `NearbyJobCard` with modification

### Job Details Screen

##### Basic setup for JobDetails page and header

63. Create `[id].js` in new folder `app > job-details` (`const JobDetails`) with endpoint:
    `job-details/[id]`
64. Create `useGlobalSearchParams` to get the path variable
65. Instantiate `useRouter` hook
66. Fetch data using `useFetch`
    - endpoint: `job-details`
    - query: `{ job_id: params.id }`
67. JobDetails return `SafeAreaView`
68. Create header using `Stack.Screen` (similar to `index.js`)
    - `handlePress` uses `router.back()` to navigate backward

##### Basic Scroll view of JobDetails

69. Create `ScrollView` with `refreshControl`
70. Create `refreshing` state
71. Conditional rendering
    - If `isLoading`, render a large `ActivityIndicator` with primary color
    - If error occurs, render error message
    - If `data.length === 0`, show `No data`
    - Otherwise, return `View` with medium padding and `paddingBottom: 100`
72. Add `Company` and `JobTabs` component into `View`

##### Implements Company component

73. Create `Company` component
74. Create `View > View > Image` (use `checkImageUrl` to conditional return `uri`)
75. Display Job Title below company logo
76. Display Company Name below Job Title
77. Display `icons.location` and `location` next to Company Name

##### Implements JobTabs component

78. Since JobTabs displays different info based on the active Tab, we create
    1.  `tabs = ["About", "Qualifications", "Responsibilities"]`
    2.  State `activeTab`
79. Create `JobTabs` component
80. Create `View > FlatList`
81. `FlatList` render `TabButton`
82. Defined `TabButton` in `JobTabs.jsx` taking props
    1.  `name`: `item`
    2.  `activeTab`: `activeTab`
    3.  `onHandlePress`: `setActiveTab`
83. `TabButton` is a `TouchableOpacity` displaying tab name

##### Create a displayTabContent, create Specific component and call it in JobDetails page (Complete qualification content display)

84. Call `displayTabContent()` after `JobTabs` in JobDetails page
85. Define `displayTabContent` with switch case statements on `activeTab`, return `<Specifics activeTab={activeTab} keyPoints={data[0].job_highlights?.Qualifications ?? ["N/A"]} />` for `Qualification` tab
86. Create `Specifics.jsx` in new folder `components > jobdetails > specifics`
87. Create `View > Text` to display active tab as title
88. Create a view container below title which contains a list of `points` (display actual content)

```
<View>
	{points.map((item, index) => (
		<View key={item + index}>
			<Text style={styles.pointDot}/>
			<Text>{item}</Text>
		</View>
	))}
</View>
```

##### Display content for JobAbout tab

89. Return `<JobAbout info />` for About statement (ref to step 85)
90. Create `JobAbout` component `View > Text + ( View > Text )`

##### Display content for Responsibilities tab

91. The switch statement of `Responsibilities` returns the same `specifics` component as `Qualifications`

##### Create JobFooter component below ScrollView

92. Add `JobFooter` component (prop `url`) below `ScrollView` in `[id].js`
93. Create `JobFooter` component `View > (TouchableOpacity > Image) + (TouchableOpacity > Text)`
94. Add `onPress={() => Linking.openURL(url)` to Apply job button

### Implements search functionality

95. Create new state `searchTerm` in `index.js` (app)
96. Add 3 props to `Welcome` component, `searchTerm`, `setSearchTerm` and `handleClick`
    - `handleClick`: route to `/search/${searchTerm}`
97. Add props to `TextInput` and search button
    - `value={searchTerm}`
    - `onChange={(text) => setSearchTerm(text)}`
    - `onPress={handleClick}`
98. Create `[id].js` in new folder `app > search`
99. Fix bug: `onChange` to `onChangeText` for `TextInput`

##### Finishing

100. Add `handlePress` in `PopularJobCard`
101. Implement `handlePress` in `PopularJobs`
102. Create new state `selectedJob` in `PopularJobs`
103. Implement `onRefresh` to run `refetch` in `[id].js` (job-details)
