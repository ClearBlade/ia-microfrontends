Custom components for asset types. To add a new component follow these steps - 
- Create a new component folder under aiComponents folder
- Your component folder will have all the UI to render as a plugin in IA (refer to Anomaly Detection component)
- Your component will get following data from IA - 
  - `schema`: Asset type schema for choosing attributes 
  - `componentMeta`: Any model metadata if required 
  - `componentName`: Name of the component
  - `assetTypeName`: Asset Type on which this component is being configured
  - `setValues`: Function to store data in IA
- Additionally, your component folder can have a settings.json file of type settings.d.ts (NOT YET UPDATED TO THE LATEST. See settings.json from Anomaly Detection for reference.) from root folder. You can specify IA entities you want to create when this component is configured in IA.  