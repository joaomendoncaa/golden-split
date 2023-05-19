import * as vscode from "vscode";

function getActiveEditorDimensions(): { width: number; height: number } | undefined {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return undefined;
    }

    const visibleRange = editor.visibleRanges[0];
    const fontSize = vscode.workspace.getConfiguration("editor").get("fontSize") as number;
    const numVisibleColumns = visibleRange.end.character - visibleRange.start.character + 1;
    const typicalHalfwidthCharacterWidth = vscode.workspace.getConfiguration("editor");
    console.log("typicalHalfwidthCharacterWidth", typicalHalfwidthCharacterWidth);
    const lineHeight = vscode.workspace.getConfiguration("editor").get("lineHeight") as number;
    const width = numVisibleColumns * fontSize;
    const height = editor.visibleRanges.reduce(
        (acc, range) => acc + lineHeight * (range.end.line - range.start.line + 1),
        0
    );

    return { width, height };
}

export function goldenSplitEditorGroup(): void {
    let dimensions = getActiveEditorDimensions();

    console.log("dimensions", dimensions);
}
