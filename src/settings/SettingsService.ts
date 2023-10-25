export class SettingsService  {
    private static instance: SettingsService;
    component1?: Array<String>;
    component2?: Array<String>;
 
    private constructor() {
        this.component1 = undefined;
        this.component2 = undefined;
    }

    static getInstance() {
        if(!SettingsService.instance) {
            SettingsService.instance = new SettingsService();
        }
        return SettingsService.instance;
    }

    public setComponent1(component1 : Array<String>) {
        this.component1 = component1;
    }
  
    public getComponent1():  Array<String> | undefined {
        return this.component1;
    }
    
    public setComponent2(component2 : Array<String>) {
        this.component2 = component2;
    }
  
    public getComponent2():  Array<String> | undefined {
        return this.component2;
    }
}