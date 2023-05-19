import * as vscode from "vscode";
import { goldenSplitEditorGroup } from "./lib/split";

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        "extension.goldenSplitEditorGroup",
        goldenSplitEditorGroup
    );

    context.subscriptions.push(disposable);
}
