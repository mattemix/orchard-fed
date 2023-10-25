
import {SettingsService} from "../settings/SettingsService";

interface AppContext {
    getSettingsService(): SettingsService;
}

export function wireApplication() {
    let settingsService = SettingsService.getInstance();

    container = {
        getSettingsService : () => settingsService,
    };
}

export function getContainer() : AppContext {
    return container;
}var container : AppContext;