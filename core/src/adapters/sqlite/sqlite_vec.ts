import * as sqliteVec from "sqlite-vec";
import { Database } from "better-sqlite3";
import { elizaLog } from "../../index.ts";

// Loads the sqlite-vec extensions into the provided SQLite database
export function loadVecExtensions(db: Database): void {
    try {
        // Load sqlite-vec extensions
        sqliteVec.load(db);
        elizaLog.log("sqlite-vec extensions loaded successfully.");
    } catch (error) {
        elizaLog.error("Failed to load sqlite-vec extensions:", error);
        throw error;
    }
}

/**
 * @param db - An instance of better - sqlite3 Database
 */
export function load(db: Database): void {
    loadVecExtensions(db);
}