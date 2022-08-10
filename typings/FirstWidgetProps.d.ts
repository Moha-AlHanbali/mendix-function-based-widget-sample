/**
 * This file was generated from FirstWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, EditableValue } from "mendix";

export interface FirstWidgetContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    attribute: EditableValue<string>;
    action?: ActionValue;
}

export interface FirstWidgetPreviewProps {
    readOnly: boolean;
    attribute: string;
    action: {} | null;
}
